import Link from 'next/link'


const Navigation = () => (
    <nav className="flex flex-col px-8 py-12">
      <div className="px-4 py-4">
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div className="px-4 py-4">
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
      <div className="px-4 py-4">
        <Link href="/users">
          <a>Users List</a>
        </Link>
      </div>
      <div className="px-4 py-4">
        <a href="/api/users">Users API</a>
      </div>
      
      
      
    </nav>
)

export default Navigation