
const Button = ({children ,onClick , to }) => {
    const className = 'bg-blue-500 text-white  px-4 mb-5  rounded-lg  h-10 tracking-wide border-b-2 border-blue-800 focus:outline-none focus:ring focuse:ring-blue-800 focus-ring-offset-2 hover:bg-blue-600 transition-all duration-200'
  return (
    <button
        onClick={onClick}
        to={to}
        className={className}
    >{children}</button>
  )
}

export default Button