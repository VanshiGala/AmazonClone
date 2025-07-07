import React from "react";

function Footer() {
  return (
    <>
      {/* <div className="bg-gray-800 w-full text-white px-4 py-6 h-70">
        <div className="w-full flex flex-wrap justify-between gap-2 text-sm">
          <div>
            <p className="font-bold text-lg">Get to know us!</p>
            <p className="text-gray-400">
              About Amazon
              <br />
              Careers
              <br />
              Press Releases
              <br />
              Amazon Science
            </p>
          </div>
          <div>
            <p className="font-bold text-lg">Connect with us</p>
            <p className="text-gray-400">
              Facebook
              <br />
              Twitter
              <br />
              Instagram
            </p>
          </div>
          <div>
            <p className="font-bold text-lg">Make money with us</p>
            <p className="text-gray-400">
              Sell on Amazon
              <br />
              Sell under Amazon Accelerator
              <br />
              Protect and build your brand
              <br />
              Amazon global selling
              <br />
              Supply to Amazon
              <br />
              Become an Affiliate
              <br />
              Fulfilment by Amazon
              <br />
              Advertise your products
              <br />
              Amazon pay on Merchants
            </p>
          </div>
          <div>
            <p className="font-bold text-lg">Let Us Help You</p>
            <p className="text-gray-400">
              Your Account
              <br />
              Returns Centre
              <br />
              Recalls and Product Safety Alerts
              <br />
              100% Purchase Protection
              <br />
              Amazon App Download
              <br />
              Help
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 text-white w-full px-6 py-8">
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 px-6 text-sm">
          <div>
            <p className="font-bold">AbeBooks</p>
            <p className="text-gray-400">
              Books, art
              <br />& collectibles
            </p>
          </div>
          <div>
            <p className="font-bold">Amazon Business</p>
            <p className="text-gray-400">
              Everything For
              <br />
              Your Business
            </p>
          </div>
          <div>
            <p className="font-bold">Audible</p>
            <p className="text-gray-400">
              Download
              <br />
              Audio Books
            </p>
          </div>
          <div>
            <p className="font-bold">Prime Now</p>
            <p className="text-gray-400">
              2-Hour Delivery
              <br />
              on Everyday Items
            </p>
          </div>
          <div>
            <p className="font-bold">IMDb</p>
            <p className="text-gray-400">
              Movies, TV
              <br />& Celebrities
            </p>
          </div>
          <div>
            <p className="font-bold">Amazon Prime Music</p>
            <p className="text-gray-400">
              100 million songs, ad-free
              <br />
              Over 15 million podcast episodes
            </p>
          </div>
          <div>
            <p className="font-bold">Shopbop</p>
            <p className="text-gray-400">
              Designer
              <br />
              Fashion Brands
            </p>
          </div>
          <div>
            <p className="font-bold">Amazon Web Services</p>
            <p className="text-gray-400">
              Scalable Cloud
              <br />
              Computing Services
            </p>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-gray-400 space-x-4">
          <span className="hover:underline cursor-pointer">
            Conditions of Use & Sale
          </span>
          <span className="hover:underline cursor-pointer">Privacy Notice</span>
          <span className="hover:underline cursor-pointer">
            Interest-Based Ads
          </span>
          <p className="mt-2">
            © 1996-2025, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </div> */}
      <footer className="bg-gray-900 text-white px-4 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-2">Get to know us!</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>About Amazon</li>
              <li>Careers</li>
              <li>Press Releases</li>
              <li>Amazon Science</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Make money with us</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>Sell on Amazon</li>
              <li>Become an Affiliate</li>
              <li>Advertise Your Products</li>
              <li>Amazon Global Selling</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Connect with us</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Let Us Help You</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>Your Account</li>
              <li>Returns Centre</li>
              <li>100% Purchase Protection</li>
              <li>Amazon App Download</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
