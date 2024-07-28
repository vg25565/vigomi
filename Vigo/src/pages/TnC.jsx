import React from 'react';
import Navbar from '../components/nav';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  return (
    <>

      <div className="bg-black py-8">
        <div className="container mx-auto bg-gray-900 p-8 shadow-md">
          <h1 className="text-center text-3xl font-bold text-gray-100">Terms and Conditions</h1>

          <section className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-100">1. Scope of Services</h2>
            <p className="text-gray-200 mt-2">The software agency ('Agency') provides web development, app development, social media management, and video editing services ('Services').</p>
          </section>

          <section className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-100">2. Client Meetings</h2>
            <p className="text-gray-200 mt-2">Clients are required to attend scheduled meetings to discuss project details, progress, and any necessary approvals. All meetings will be recorded for documentation and reference purposes.</p>
          </section>

          <section className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-100">3. Project Completion and Payment</h2>
            <p className="text-gray-200 mt-2">Upon completion of the project, the client agrees to review and approve the final deliverables within a reasonable timeframe as agreed upon during initial discussions. Payment for completed projects is due within 15 days from the date of invoicing.</p>
          </section>
          <section className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-100">4. Ownership and Rights</h2>
            <p className="text-gray-200 mt-2">Upon receipt of full payment, the client gains ownership of all deliverables, except where specified otherwise in a separate agreement.</p>
          </section>
          <section className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-100">5. Confidentiality</h2>
            <p className="text-gray-200 mt-2">Both parties agree to maintain confidentiality regarding any proprietary or sensitive information disclosed during the course of the project.</p>
          </section>
          <section className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-100">6. Changes and Revisions</h2>
            <p className="text-gray-200 mt-2"> The client may request changes or revisions to the deliverables within a reasonable scope. Additional charges may apply for significant changes outside the original scope of work.</p>
          </section>
          <section className="mt-6">

            <h2 className="text-2xl font-semibold text-gray-100">7. Termination</h2>
            <p className="text-gray-200 mt-2">Either party may terminate the agreement with a written notice. The client agrees to compensate the Agency for all work completed up to the termination date.</p>
          </section>
          <section className="mt-6">

            <h2 className="text-2xl font-semibold text-gray-100">8. Limitation of Liability</h2>
            <p className="text-gray-200 mt-2">The Agency's liability is limited to the total amount paid by the client for the services provided. The Agency is not liable for any consequential damages.</p>
          </section>
          <section className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-100">9. Dispute Resolution</h2>
            <p className="text-gray-200 mt-2">Any disputes arising from this agreement will be resolved through mediation. If mediation fails, the matter will be settled through arbitration in [jurisdiction] according to the laws therein.</p>
          </section>
          <section className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-100">10. Governing Law</h2>
            <p className="text-gray-200 mt-2">This agreement shall be governed by and construed in accordance with the laws of [jurisdiction], excluding its conflict of law provisions.</p>
          </section>
          <section className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-100">11. Entire Agreement</h2>
            <p className="text-gray-200 mt-2">This document constitutes the entire agreement between the parties and supersedes any prior agreements or understandings, whether written or oral.</p>
          </section>
          <section className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-100">12. Amendments</h2>
            <p className="text-gray-200 mt-2">Any amendments to this agreement must be made in writing and signed by both parties to be valid.</p>
          </section>
          <section className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-100">13. SEO Services</h2>
            <p className="text-gray-200 mt-2">The Agency offers SEO (Search Engine Optimization) services to improve online visibility and traffic. However, results are not guaranteed, and the Agency does not warrant that these services will directly result in business growth.</p>
          </section>
          <section className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-100">14. Subscription Services</h2>
            <p className="text-gray-200 mt-2">Clients may opt for subscription-based services on a monthly basis. All subscribed services are chargeable monthly. If payments are not made on time, all subscribed services will be paused until payment is received.</p>
          </section>

          <section className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-100">15. Domain and Hosting</h2>
            <p className="text-gray-200 mt-2">Domain registration and hosting services are not included in the project scope and are charged separately. The client is responsible for acquiring and maintaining their domain and hosting services.</p>
          </section>
          <section className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-100">16. Independent Providers</h2>
            <p className="text-gray-200 mt-2">The Agency does not have any partnership with domain registrars or hosting providers. Clients are free to choose their own providers for domain and hosting services.</p>
          </section>
          <section className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-100">17. App Hosting</h2>
            <p className="text-gray-200 mt-2">Hosting of apps on Play Store or any other app stores is not included in the service plans offered by the Agency. Clients may choose to add app hosting services by paying additional charges as specified by the Agency.</p>
          </section>
          <section className="mt-6">
            <h2 className="text-2xl font-semibold text-gray-100">18. Project Confirmation Deposit</h2>
            <p className="text-gray-200 mt-2">A non-refundable deposit of 10% of the total project amount is required from the client to confirm and initiate the project.</p>
          </section>
          <div className="text-center mt-8">
            <p className="font-bold text-gray-200">By engaging the Agency's services, the client acknowledges and agrees to these terms and conditions.</p>
          </div>

          <p className="text-center mt-4 text-gray-200">Thank You</p>
          <Link to="/">
                                    <button
                                        className=" group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-rose-300 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur origin-left hover:decoration-2 hover:text-rose-200 relative bg-neutral-800 h-16 w-52 border text-center  text-white text-4xl font-raleway rounded-lg  overflow-hidden  before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg ">
                                        GO Back
                                    </button>
                                    </Link>
        </div>
      </div></>
  );
};

export default TermsAndConditions;



