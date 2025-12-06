import React, { useState, useEffect, JSX } from 'react';
import { FiMessageCircle } from 'react-icons/fi';
import useIsBrowser from '@docusaurus/useIsBrowser';
import ChatPanel from './ChatPanel';
import styles from './AiChatButton.module.css';

// Session storage key for chat open state
const CHAT_OPEN_KEY = 'physical-ai-chat-open';

export default function AiChatButton(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedText, setSelectedText] = useState<string>('');
  const isBrowser = useIsBrowser();

  // Restore chat open state from session storage on mount
  useEffect(() => {
    if (!isBrowser) return;
    
    const savedState = sessionStorage.getItem(CHAT_OPEN_KEY);
    if (savedState === 'true') {
      setIsOpen(true);
    }
  }, [isBrowser]);

  // Save chat open state to session storage
  useEffect(() => {
    if (!isBrowser) return;
    sessionStorage.setItem(CHAT_OPEN_KEY, isOpen.toString());
  }, [isOpen, isBrowser]);

  useEffect(() => {
    if (!isBrowser) return;
    
    // Listen for text selection
    const handleSelection = () => {
      const selection = window.getSelection();
      if (selection && selection.toString().trim()) {
        setSelectedText(selection.toString().trim());
      }
    };

    document.addEventListener('mouseup', handleSelection);
    return () => document.removeEventListener('mouseup', handleSelection);
  }, [isBrowser]);

  const toggleChat = () => {
    setIsOpen(prev => !prev);
    // Clear selected text when closing
    if (isOpen) {
      setSelectedText('');
    }
  };

  return (
    <>
      <button
        className={`${styles.chatButton} ${isOpen ? styles.active : ''}`}
        onClick={toggleChat}
        aria-label={isOpen ? 'Close AI Chat' : 'Open AI Chat'}
      >
        <FiMessageCircle size={22} />
        {selectedText && !isOpen && (
          <span className={styles.badge}>1</span>
        )}
        <span className={styles.tooltip}>Ask AI Assistant</span>
      </button>

      <ChatPanel
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        selectedText={selectedText}
      />
    </>
  );
}
