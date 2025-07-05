"use client"

import { AlertCircle, X } from "lucide-react"

const ErrorMessage = ({ message, onClose }) => (
    <div className="fixed top-24 left-1/2 transform -translate-x-1/2 bg-red-50 border-2 border-red-200 text-red-800 px-6 py-4 rounded-2xl shadow-2xl z-50 flex items-center gap-4 backdrop-blur-sm animate-slide-down max-w-md">
        <div className="bg-red-100 p-2 rounded-full">
            <AlertCircle className="w-5 h-5 text-red-600" />
        </div>
        <span className="flex-1 font-medium">{message}</span>
        <button
            onClick={onClose}
            className="text-red-600 hover:text-red-800 hover:bg-red-100 p-1 rounded-full transition-all duration-200"
        >
            <X className="w-5 h-5" />
        </button>
    </div>
)

export default ErrorMessage
