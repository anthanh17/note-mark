// Define các kiểu data ts cho các module, biến, hàm trong phần preload script elctron app
// Preload script là một đoạn mã JavaScript hoặc TypeScript được chạy trong quá trình render process (quá trình xử lý giao diện người dùng) trước khi web page của ứng dụng được tạo.

// File index.d.ts giúp cung cấp thông tin về cấu trúc, kiểu dữ liệu, và các đối tượng mà preload script sẽ sử dụng

declare global {
  interface Window {
    // electron: ElectronAPI
    context: {
      locale: string
    }
  }
}
