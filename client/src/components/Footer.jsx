import { Footer } from "flowbite-react"
import { Link } from "react-router-dom"
import { BsFacebook, BsInstagram, BsTwitter, BsDribbble, BsGithub } from 'react-icons/bs'
const FooterComponent = () => {
    return (
        <Footer container className="border border-t-8 border-teal-500">
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                    <div className="mt-5">
                        <Link to='/' className='sefl-center whitespace-nowrap text-sm
                            sm:text-xl font-semibold dark:text-white'>
                            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500
                                 via-purple-500 to-pink-500 rounded-lg text-white">IT's</span>
                            BLOG
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm: mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="About" />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href='https://www.100sjproject.com'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    100 JS Projects
                                </Footer.Link>
                                <Footer.Link
                                    href='/about'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    IT's Blog
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Follow us" />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href='https://github.com/Tquandoo'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Github
                                </Footer.Link>
                                <Footer.Link
                                    href='#'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Discord
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" />
                            <Footer.LinkGroup col>
                                <Footer.Link
                                    href='#'
                                >
                                    Privacy Policy
                                </Footer.Link>
                                <Footer.Link
                                    href='#'
                                >
                                    Terms &amp; Conditions
                                </Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href="#" by="Tquandoo" year={new Date().getFullYear()} />
                    <div className="flex gap-6 sm:mt-3 mt-4 sm:justify-center">
                        <Footer.Icon href="https://www.facebook.com/profile.php?id=100082289906432" icon={BsFacebook} />
                        <Footer.Icon href="https://www.instagram.com/tquandoo_24/" icon={BsInstagram} />
                        <Footer.Icon href="#" icon={BsTwitter} />
                        <Footer.Icon href="https://github.com/Tquandoo" icon={BsGithub} />
                        <Footer.Icon href="#" icon={BsDribbble} />
                    </div>
                </div>
            </div>
        </Footer>
    )
}
export default FooterComponent