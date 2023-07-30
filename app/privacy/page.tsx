import React from 'react'
import BG from '@/components/Background/BG'

type Props = {}

const page = (props: Props) => {
  return (
    <div className="h-screen flex justify-center items-center text-justify">
      <div className="h-[80vh] w-[90vw] overflow-y-scroll">
        <div className="flex flex-col justify-center items-center">
          <h3 className="mt-24 text-2xl">Privacy Policy</h3>
          <hr className="w-[70vw] mt-2 h-1" />
          <p className="w-[70vw] mt-2 ">
            Welcome to Spiritual GPT. We are committed to protecting your
            privacy and ensuring that your personal information is handled in a
            safe and responsible manner. This Privacy Policy describes our
            practices regarding the collection, use, and disclosure of the
            information we receive when you use our website and services
            (collectively, the &quot;Services&quot;). By accessing or using our
            Services, you agree to this Privacy Policy. If you do not agree with
            this Privacy Policy, please do not access or use our Services.
          </p>
          {/* info collect */}
          <h3 className="mt-10 text-2xl">Information Collection</h3>
          <hr className="w-[70vw] mt-2 h-1" />
          <span className="w-[70vw] mt-2 ">
            We may collect and store the following types of information when you
            interact with our Services:
            <ul className="mt-2">
              <li>
                a. Questions and Responses: When you submit questions to our
                website, we collect the text of your question and the
                AI-generated response. This information helps us improve the
                quality of our AI models and provide better responses to
                users&apos; queries.
              </li>
              <li>
                b. Usage Information: We may collect information about your
                usage of our Services, such as the pages you visit, the links
                you click, and the time you spend on our website. This
                information helps us understand how users interact with our
                Services and make improvements to enhance user experience.
              </li>
              <li>
                c. Technical Information: We may collect technical information
                about your device, such as your IP address, browser type, and
                operating system. This information helps us understand how our
                Services are accessed and enables us to optimize performance and
                security.
              </li>
            </ul>
          </span>
          {/* use info */}
          <h3 className="mt-10 text-2xl">Use of Information</h3>
          <hr className="w-[70vw] mt-2 h-1" />
          <span className="w-[70vw] mt-2 ">
            We use the information we collect to:
            <ul className="mt-2">
              <li>a. Provide, maintain, and improve our Services.</li>
              <li>
                b. Analyze and understand how our Services are used to make
                enhancements and develop new features.
              </li>
              <li>
                c. Improve the accuracy and effectiveness of our AI models by
                using the collected questions and answers to train and refine
                them.
              </li>
              <li>
                d. Detect, prevent, and address technical issues and potential
                security threats.
              </li>
            </ul>
          </span>
          {/* info sharing */}
          <h3 className="mt-10 text-2xl">Information Sharing</h3>
          <hr className="w-[70vw] mt-2 h-1" />
          <span className="w-[70vw] mt-2 ">
            We do not sell, rent, or share your personal information with third
            parties for their marketing purposes. We may share anonymized,
            aggregated information with third parties for research, analysis, or
            other legitimate purposes. This information does not identify you
            personally.
          </span>
          {/* data retention */}
          <h3 className="mt-10 text-2xl">Data Retention</h3>
          <hr className="w-[70vw] mt-2 h-1" />
          <span className="w-[70vw] mt-2 ">
            We retain the information collected for as long as necessary to
            fulfill the purposes described in this Privacy Policy or as required
            by law.
          </span>
          {/* data security */}
          <h3 className="mt-10 text-2xl">Data Security</h3>
          <hr className="w-[70vw] mt-2 h-1" />
          <span className="w-[70vw] mt-2 ">
            We take the security of your information seriously and implement
            appropriate technical and organizational measures to protect the
            information we collect from unauthorized access, disclosure,
            alteration, or destruction. However, no method of transmission over
            the internet or electronic storage is completely secure, and we
            cannot guarantee the absolute security of your information.
          </span>
          {/* Children's Privacy */}
          <h3 className="mt-10 text-2xl">Children&apos;s Privacy</h3>
          <hr className="w-[70vw] mt-2 h-1" />
          <span className="w-[70vw] mt-2 ">
            Our Services are not intended for children under the age of 13. We
            do not knowingly collect personal information from children under
            13. If we become aware that a child under 13 has provided us with
            personal information, we will take steps to delete such information
            from our records.
          </span>
          {/* Children's Privacy */}
          <h3 className="mt-10 text-2xl">Children&apos;s Privacy</h3>
          <hr className="w-[70vw] mt-2 h-1" />
          <span className="w-[70vw] mt-2 ">
            Our Services are not intended for children under the age of 13. We
            do not knowingly collect personal information from children under
            13. If we become aware that a child under 13 has provided us with
            personal information, we will take steps to delete such information
            from our records.
          </span>
          {/* Changes to this Privacy Policy */}
          <h3 className="mt-10 text-2xl">Changes to this Privacy Policy</h3>
          <hr className="w-[70vw] mt-2 h-1" />
          <span className="w-[70vw] mt-2 ">
            We may update this Privacy Policy from time to time. If we make any
            material changes, we will notify you by posting the updated Privacy
            Policy on our website. Your continued use of our Services after the
            changes have been posted indicates your acceptance of the updated
            Privacy Policy.
          </span>
          {/* Contact Us */}
          <h3 className="mt-10 text-2xl">Contact Us </h3>
          <hr className="w-[70vw] mt-2 h-1" />
          <span className="w-[70vw] mt-2 ">
            If you have any questions or concerns about this Privacy Policy or
            our privacy practices, please{' '}
            <a
              href="https://sunilband.netlify.app/#contact"
              className="underline"
            >
              {' '}
              contact us
            </a>{' '}
            . We are committed to addressing any concerns you may have and will
            respond to your inquiries as soon as possible.
          </span>
        </div>
      </div>
    </div>
  )
}

export default page
