'use client'
 
import { useRouter } from 'next/navigation'
// export function Modal({ children }: { children: React.ReactNode }) {
export default function PostPage() {
  const router = useRouter()
 
  return (
    <>
    <div className="fixed inset-0 bg-black/50 dark:bg-black-100" aria-hidden="true" />
    <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
    <div className="mx-auto max-w-sm rounded bg-gray-100 dark:bg-gray-800 p-4">
    <h2>Modal</h2>
      <button
        onClick={() => {
          router.back()
        }}
      >
        Close modal
      </button>
      {/* <div>{children}</div> */}
      </div>
      </div>
    </>
  )
}