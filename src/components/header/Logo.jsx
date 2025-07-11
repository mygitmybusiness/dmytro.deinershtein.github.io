const Logo = ({type}) => {
    return (
      <div className="logo" type={type}>
        {type == 'text' && (
            <h1 className="logo-text">{'_dima'}</h1>
        )}
      </div>
    )
  }
  
  export default Logo;