export default function LayoutAuth({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col justify-center h-full items-center content-center">
      <h1 className="font-bold mb-6 text-2xl">ELEGANCE TRADING GROUP</h1>
      {children}
    </div>
  )
}
