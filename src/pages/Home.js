import { Link } from 'react-router-dom';

import sign from '../images/sign.svg'
import logo from '../images/logo.svg'
import step1 from '../images/Step1.svg'
import step2 from '../images/Step2.svg'
import step3 from '../images/Step3.svg'

import '../App.css'

function Home() {
    return (
        <div className='home-background '>
            <div className='d-flex justify-content-center flex-column align-items-center'>
                <div className='pt-5'>
                    <img src={sign} alt='sign-logo' style={{ width: '100px', height: 'auto' }}></img>
                    <img src={logo} alt='main-logo' style={{ width: '300px', height: 'auto' }}></img>
                </div>
                <div className='mt-4 mb-2'>
                    <h3 style={{ color: '#7cb100' }}>Rent Textbooks by Price Comparing Textbook Rental Sites</h3>
                </div>
                <div className='mt-5 home-buttons mb-5'>
                    <Link to="/books" className='btn btn-secondary custom-width p-2 fw-bold' style={{ fontSize: '20px'}}>View Books</Link>
                    <Link to="/create-books" className='btn btn-primary custom-width p-2 fw-bold' style={{ fontSize: '20px'}}>Upload a Book</Link>
                </div>
                <div className='d-flex justify-content-between mt-5 home-icons mb-5'>
                    <div>
                        <img src={step1} alt='' style={{ width: '150px '}}></img>
                        <h4 style={{ color: '#7cb100', textAlign: 'center'  }}>
                            Search
                        </h4>
                        <p style={{ fontSize: '20px' }}>
                            above for all your books
                        </p>
                    </div>
                    <div>
                        <img src={step2} alt='' style={{ width: '150px '}}></img>
                        <h4 style={{ color: '#7cb100', textAlign: 'center'  }}>
                            Compare
                        </h4>
                        <p style={{ fontSize: '20px' }}>
                            prices to find the lowest
                        </p>
                    </div>
                    <div>
                        <img src={step3} alt='' style={{ width: '150px '}}></img>
                        <h4 style={{ color: '#7cb100', textAlign: 'center' }}>
                            Save!
                        </h4>
                        <p style={{ fontSize: '20px' }}>a ton on all your books</p>
                    </div>

                </div>

                <div style={{ border: '5px solid #7cb100', width: '100%' }}></div>
                
                <div style={{ textAlign: 'left' }} className='rent-a-book-container container-fluid pt-3'>
                    <div className='col-md-12 container p-4' style={{ backgroundColor: '#ffffff' }}>
                        <div>
                            <h3 className='mt-2 mb-2' style={{ color: '#a4a3ab' }}>What does it mean to rent textbooks?</h3>
                            <p style={{ fontSize: '20px' }}>Renting textbooks means that you pay a fee to use a textbook for a certain date range. Generally this date range is a semester or year long. However, some sites allow customized rental date ranges. Textbook rentals tend to be much cheaper than buying a textbook.</p>
                            <p style={{ fontSize: '20px' }}>We take your savings a step further by price comparing dozens of textbook rental sites. The TextbookRentals.com price comparison searches dozens of stores and displays them in an easy to read table, listing the cheapest prices first. We show 3 different textbook rental date ranges. They are semester long (120+ days), quarter long (90 to 119 days) and session long (less than 90 days).</p>
                        </div>
                        <div>
                            <h3 className='mt-2 mb-2' style={{ color: '#a4a3ab' }}>Why should I rent textbooks?</h3>
                            <p style={{ fontSize: '20px' }}>According to the College Board, the cost of college is continuing to rise. In fact, the average cost of going to a public college is nearing $40,000 a year, while the average cost of going to a private college is nearing $50,000 a year. Although there isn't much you can do about the cost of tuition or room and board, there is something you can do about the cost of the textbooks you use. If you rent textbooks instead of buying them, you can save a significant amount of money. Now take that a step further and use our textbook rental price comparison to comparison shop many textbook rental sites in one place. Helping you find the cheapest textbook rentals is what we do!</p>
                        </div>
                        <div>
                            <h3 className='mt-2 mb-2' style={{ color: '#a4a3ab' }}>Is renting a textbook similar to borrowing a book from the library?</h3>
                            <p style={{ fontSize: '20px' }}>Not really. When you borrow a book from the library and return it, there typically isn't any kind of fee involved unless you are late returning the book. A textbook rental is more like renting a movie. You pay a small fee and are allowed to use it for a certain time frame.</p>
                        </div>
                        <div>
                            <h3 className='mt-2 mb-2' style={{ color: '#a4a3ab' }}>How do I return my textbook rentals?</h3>
                            <p style={{ fontSize: '20px' }}>Returning a textbook rental is easy. Generally you just go to the site where you rented the textbook, log in to your account and print out a return label. In almost all cases returning the rental is free of shipping charges. If you determine you are late returning your textbook rental, you generally just need to pay a small fee for overage charges.</p>
                        </div>
                        <div>
                            <h3 className='mt-2 mb-2' style={{ color: '#a4a3ab' }}>Will my textbook rental come with an access code?</h3>
                            <p style={{ fontSize: '20px' }}>It's not likely that your textbook rental will come with an access code. In almost all cases textbook rentals are textbooks that have been used before. This means that if there was an access code that came with the original textbook, then it was likely already used by the original owner or renter of the textbook. However, it is very possible that you don't even need the access code. A lot of professors don't require them. Therefore it's wise to contact the professor of your class to determine if you need to buy one. The good news is that you can buy access codes on the textbook publishers website or on the secondary market using our price comparison. Just add the term "access code" after the ISBN or textbook title for the textbook access code you need.</p>
                        </div>
                        <div>
                            <h3 className='mt-2 mb-2' style={{ color: '#a4a3ab' }}>Can I return my textbook rentals and get my money back?</h3>
                            <p style={{ fontSize: '20px' }}>Yes, in most cases you can indeed get your money back for your textbook rental if you drop a class or the professor tells you that you don't need the textbook. However, you will need to check with the store that you rented your textbook from. Almost all stores will offer you a refund as long as not too much time has passed.</p>
                        </div>
                        <div>
                            <h3 className='mt-2 mb-2' style={{ color: '#a4a3ab' }}>Is free shipping included when I rent textbooks?</h3>
                            <p style={{ fontSize: '20px' }}>A majority of the stores in our textbook price comparison offer free shipping no matter what. Just about every store in our price comparison includes free shipping when you meet certain criteria like order minimums. If you don't meet certain criteria, then generally you could pay anywhere from $2 to $6 to get your textbook rental shipped to you. If there is a charge for shipping, we include it in our price comparison table. That way, you always know what the exact price will be for the textbook you need to rent.</p>
                        </div>
                        <div>
                            <h3 className='mt-2 mb-2' style={{ color: '#a4a3ab' }}>Do you price compare new and used textbooks?</h3>
                            <p style={{ fontSize: '20px' }}>Yes, we also display new & used textbook prices right below the rental prices. Sometimes you can actually purchase used textbooks cheaper than renting them. This can be a win-win, since you can usually sell them back at the end of the semester. So always double check the used prices that we show, just in case!</p>
                        </div>
                        <div>
                            <h3 className='mt-2 mb-2' style={{ color: '#a4a3ab' }}>Do you price compare eTextbooks?</h3>
                            <p style={{ fontSize: '20px' }}>Yes, we price compare eTextbooks also. Maybe you waited too long to order your textbooks or maybe you just didn't have the money to get them earlier. That's alright, don't beat yourself up about it. If you see that it's going to take too long to get your textbooks, then eTextbooks are a great alternative. Sure, they tend to cost a little more than renting, but they have some big positives too. Mainly that you get eTextbooks as soon as you pay for them. In most cases, eTextbooks are very similar to rental textbooks. Just like rental textbooks, they also tend to expire. If you want to keep an eTextbook forever, they usually have an option to do so. Keep in mind that a forever eTextbook does tend to be a lot more expensive than an eTextbook that expires.</p>
                        </div>
                    </div>

                    <div style={{ backgroundColor: '#ffffff' }} className='container mt-4 p-4'>
                        <h3 className='mt-2 mb-2' style={{ color: '#a4a3ab' }}>Informative Student Articles</h3>
                        <p style={{ color: '#7cb100' }}>The Secret Behind Cutting College Textbook Costs</p>
                        <p style={{ color: '#7cb100' }}>7 Tips for Scoring a Cheap College Textbook</p>
                        <p style={{ color: '#7cb100' }}>How Much Money Can You Save by Renting College Textbooks?</p>
                        <button className='float-end' style={{ color: '#7cb100', border: 'none', backgroundColor: 'transparent' }}>Read more articles</button>
                    </div>

                    <div className='container mt-4 p-4 mb-5' style={{ backgroundColor: '#7cb100', borderRadius: '10px', textAlign: 'center' }}>
                        <div style={{ color: '#ffffff' }}>For eBooks, visit our sister site</div>
                        <div style={{ color: '#ffffff', fontSize: '28px' }} className='fw-bold'>CheapeBook.com</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;