import Nav from './Nav';

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div id='root'>
      {/* <Nav /> */}
      {children}
    </div>
  )
}
