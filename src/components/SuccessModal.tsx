'use client';

import { useEffect } from 'react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  message?: string;
}

export default function SuccessModal({ isOpen, onClose, message }: SuccessModalProps) {
  useEffect(() => {
    if (isOpen) {
      // 5秒後に自動的に閉じる
      const timer = setTimeout(() => {
        onClose();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* 背景のオーバーレイ */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* モーダル本体 */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full transform transition-all duration-300 scale-100">
          {/* 成功アイコンとメッセージ */}
          <div className="p-6 text-center">
            {/* チェックマークアイコン */}
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
              <svg 
                className="h-10 w-10 text-green-600" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            </div>
            
            {/* タイトル */}
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              送信完了
            </h3>
            
            {/* メッセージ */}
            <p className="text-gray-600 mb-6">
              {message || 'お問い合わせを受け付けました。担当者より折り返しご連絡いたします。'}
            </p>
            
            {/* 閉じるボタン */}
            <button
              onClick={onClose}
              className="inline-flex justify-center px-6 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              閉じる
            </button>
          </div>
        </div>
      </div>
    </>
  );
}