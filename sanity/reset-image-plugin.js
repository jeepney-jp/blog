// Sanity Studioプラグインとして画像フィールドをリセット
export default {
  name: 'reset-image',
  title: 'Reset Image',
  type: 'document',
  
  // カスタムアクション
  __experimental_actions: ['update', 'create', 'delete', 'publish'],
  
  // 画像フィールドをリセットするカスタムアクション
  documentActions: (prev, context) => {
    return [
      ...prev,
      {
        label: 'Reset Image Field',
        onHandle: async () => {
          const { document } = context
          if (document.image?._upload) {
            // 不完全なアップロードをクリア
            await context.patch([{unset: ['image']}]).commit()
            alert('Image field has been reset. Please try uploading again.')
          }
        }
      }
    ]
  }
}