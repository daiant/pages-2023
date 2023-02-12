import './globals.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {children}
        <div className="SVGs" style={{ display: 'none' }}>
          <svg id='cat'>
            <path d="M39.232 21.4862C47.0592 11.8377 35.044 13.1548 33.3002 12.2821C32.6874 11.9758 32.0845 9.01926 30.7208 9.70198C28.6208 10.7526 28.7992 16.2213 28.5714 18.0456C28.4477 19.0385 27.0613 20.4603 26.6056 21.4862C25.8783 23.1233 25.0791 25.0707 23.7429 27.1043C22.4069 29.1381 19.6147 30.7147 18.2171 32.2689C12.2691 38.8803 14.8193 46.6526 21.3496 51.6787C27.9546 56.7622 55.541 54.8649 47.7439 43.163" stroke="currentColor" strokeWidth="2.56" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M36.1445 25.9653C38.0829 33.0603 35.3003 40.4697 35.3003 47.4171C35.3003 48.2166 36.8869 47.4451 37.6641 47.588" stroke="currentColor" strokeWidth="2.56" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M26.0269 33.4206C27.5872 33.6504 29.0112 34.7958 30.1157 35.8665C35.6133 41.1969 28.5902 44.7792 28.2013 46.6635C28.1134 47.0897 29.9257 47.3832 30.2897 47.4222" stroke="currentColor" strokeWidth="2.56" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M33.8457 10.079C34.9057 9.08468 35.1079 10.8251 35.3003 11.782" stroke="currentColor" strokeWidth="2.56" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </body>
    </html>
  )
}
