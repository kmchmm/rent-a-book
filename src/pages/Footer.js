function Footer(){

    return (
        <div className='container-fluid' style={{ backgroundColor: '#4b4b4d' }}>
        <ul style={{ color: '#ffffff' }} className='d-flex justify-content-center container p-3'>
            <li style={{ borderRight: '2px solid #ffffff' }} className='p-2'>Rent Textbooks</li>
            <li style={{ borderRight: '2px solid #ffffff' }} className='p-2'>Join Our Newsletter</li>
            <li style={{ borderRight: '2px solid #ffffff' }} className='p-2'>Privacy Policy</li>
            <li style={{ borderRight: '2px solid #ffffff' }} className='p-2'>Disclaimer</li>
            <li style={{ borderRight: '2px solid #ffffff' }} className='p-2'>About Us</li>
            <li style={{ borderRight: '2px solid #ffffff' }} className='p-2'>Contact Support</li>
        </ul>
        <div style={{ color: '#ffffff' }} className='d-flex justify-content-center container pb-5'>
            TextbookRentals.com &copy; 2000 - 2024
        </div>
    </div>
    )
}

export default Footer;