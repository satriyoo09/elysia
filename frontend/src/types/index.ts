// Tipe data User
export interface User {
  id        : string
  name      : string
  email     : string
  avatar    : string | null
  role      : 'USER' | 'ADMIN'
  createdAt : string
}

// Tipe data Book
export interface Book {
  id          : string
  title       : string
  author      : string
  description : string | null
  cover       : string | null   // URL gambar cover
  category    : string
  fileUrl     : string | null   // URL PDF/ebook
  createdAt   : string
}

// Tipe data Library (buku yang disimpan user)
export interface LibraryItem {
  id      : string
  status  : 'SAVED' | 'FAVORITE'
  addedAt : string
  book    : Book
}

// Tipe data Notification
export interface Notification {
  id        : string
  title     : string
  message   : string
  isRead    : boolean
  createdAt : string
}

// Tipe response standar dari backend
export interface ApiResponse<T> {
  success : boolean
  message : string
  data    : T
}