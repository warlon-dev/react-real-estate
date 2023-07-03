const NavigationDots = ({activeDot, setActiveDot}) => {
  return (
    <div className='app__navigation'>
       {['home', 'overview', 'amenities', 'features', 'units', 'tour','location','agent','contact'].map((item, index) => (
            <a 
                href={`#${item}`} 
                key={item + index}
                className='app__navigation-dot'
                onClick={() => setActiveDot(item)}
                style={activeDot === item ? {backgroundColor: '#2ecc71'} : {}}
            />
        ))}
    </div>
  )
}

export default NavigationDots