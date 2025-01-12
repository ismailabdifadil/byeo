import PropTypes from 'prop-types'

const Button = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
  ...props
}) => {
  const baseStyles = `rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
    disabled ? 'opacity-50 cursor-not-allowed' : ''
  }`

  const variants = {
    primary: 'bg-brand-primary text-white hover:bg-purple-700',
    secondary: 'bg-white text-brand-primary hover:bg-gray-200',
    outline:
      'bg-transparent border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white',
  }

  const sizes = {
    sm: 'py-1 px-2 md:py-2 md:px-3 lg:py-2 lg:px-4',
    md: 'py-3 px-4 md:py-3 md:px-5 lg:py-4 lg:px-6',
    lg: 'py-3 px-6 md:py-4 md:px-7 lg:py-5 lg:px-8',
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant] || ''} ${
        sizes[size] || ''
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
}

export default Button
