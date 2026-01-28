import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, ShieldCheck } from 'lucide-react';

interface PrivacyModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10"
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    onClick={onClose}
                />

                {/* Modal Content */}
                <motion.div
                    initial={{ y: 50, scale: 0.95, opacity: 0 }}
                    animate={{ y: 0, scale: 1, opacity: 1 }}
                    exit={{ y: 50, scale: 0.95, opacity: 0 }}
                    className="relative w-full max-w-4xl h-full max-h-[85vh] bg-white border border-emerald-500/20 shadow-2xl overflow-hidden flex flex-col"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 md:p-8 border-b border-black/5 bg-slate-50">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-emerald-500/10 flex items-center justify-center rounded-none border border-emerald-500/20">
                                <Lock className="text-emerald-600" size={20} />
                            </div>
                            <div>
                                <h2 className="font-heading text-xl font-black uppercase tracking-wider">Privacy Policy</h2>
                                <p className="text-xs uppercase tracking-widest text-gray-400 font-heading">DATA_PROTECTION_PROTOCOL_v3.0</p>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="w-10 h-10 flex items-center justify-center hover:bg-black hover:text-white transition-colors border border-black/5"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Scrollable Body */}
                    <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-10 custom-scrollbar">

                        <section>
                            <h3 className="font-heading text-lg font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                                <span className="text-emerald-500">01.</span> INTRODUCTION
                            </h3>
                            <div className="space-y-4 text-sm font-body leading-relaxed text-gray-600">
                                <p>
                                    1.1. BNC: Bharat New-Energy Company. (“Us”, “We” or “BNC”) is committed to protect the privacy rights of its customers, visitors, and other users (“You”, “Yours”) of www.bncmotors.in (the “Site”) and related websites, applications, services and mobile applications provided by BNC: Bharat New-Energy Company. (hereinafter referred collectively as ‘BNC’) and on/in which this Privacy Policy is posted or referenced (collectively, the Services”). This Privacy Policy (“Privacy Policy”) has been created in accordance with Rule 4 of the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal data or information) Rules, 2011, in order to ensure confidentiality in the handling of or dealing with personal information, including sensitive personal data or information of the said customers, visitors and other users.
                                </p>
                                <p>
                                    1.2. Any capitalized term used but not defined in this Privacy Policy shall have the meaning in the Terms of Use.
                                </p>
                                <p>
                                    1.3. This Privacy Policy is only applicable to the Services. This Privacy Policy does not apply to any other website or digital service that you may be able to access through the Services or any website or digital services of BNC business partners, each of which have any data collection, storage and use practices and policies that may materially differ from this Privacy Policy. By accessing or using the Services, you agree to be bound by this Privacy Policy and our Terms of Use.
                                </p>
                                <p>
                                    1.4. By using the Services, You agree to the practices and policies outlined in this Privacy Policy and You hereby consent to the collection, use, and sharing of Your information as described in this Privacy Policy. If You do not agree with this Privacy Policy, You should not use the Services. If You use the Services on behalf of someone else (such as Your child) or an entity (such as Your employer), You represent that You are authorized by such individual or entity to accept this Privacy Policy on such individual’s or entity’s behalf.
                                </p>
                                <p>
                                    1.5. This Privacy Policy is in compliance with all the relevant Laws, rules and regulations at the time being in force, including but not limited to the Information Technology Act, 2000.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h3 className="font-heading text-lg font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                                <span className="text-emerald-500">02.</span> PERSONAL INFORMATION
                            </h3>
                            <div className="space-y-4 text-sm font-body leading-relaxed text-gray-600">
                                <p>
                                    2.1 When You use BNC Platforms, We collect the following categories of information such as Contact Information, Device/Technical Data, Behavioral Data, Cookies and Tracking Technologies. Our primary goal in doing so is to provide a safe, efficient, smooth and customized experience. This allows us to provide services and features that most likely meet Your needs, and to customize BNC Platforms to make your experience safer and easier. Importantly, we only collect personal information about You that we consider necessary for achieving this purpose. In general, you can browse the Site without telling us who you are or revealing any personal information about yourself. Once you give us your personal information, you are not anonymous to us. To fully use the Site, You will need to register using our online registration form, where You may be required to provide us with your contact and identity information and other personal information as indicated on the forms throughout the Site. Where possible, we indicate which fields are required and which fields are optional. You always have the option to not provide information by choosing not to use a particular service or feature on the Site. We may automatically track certain information about you based upon your behaviour on the Site. We use this information to do internal research on our users' demographics, interests, and behaviour to better understand, protect and serve our users. This information is compiled and analyzed on an aggregated basis. This information may include the URL that you just came from (whether this URL is on our Site or not), which URL you next go to (whether this URL is on our Site or not), your computer browser information, and your IP address.
                                </p>
                                <p>
                                    We use data collection devices such as "cookies" on certain pages of the Site to help analyze our web page flow, measure promotional effectiveness, and promote trust and safety. "Cookies" are small files placed on your hard drive that assist us in providing the Services. We offer certain features that are only available through the use of a "cookie". We also use cookies to allow you to enter your password less frequently during a session. Cookies can also help us provide information that is targeted to your interests. Most cookies are "session cookies," meaning that they are automatically deleted from your hard drive at the end of a session. You are always free to decline our cookies if your browser permits, although in that case you may not be able to use certain features on the Site and you may be required to re-enter your password more frequently during a session.
                                </p>
                                <p>
                                    2.2 If you choose to buy BNC products and services using the Site then we collect information about your buying behaviour. If you choose to post messages on our forum or leave feedback for other users, we may collect that information. We retain this information as necessary to resolve disputes, provide customer support and troubleshoot problems as permitted by law. If you send us personal correspondence, such as emails or letters, or if other users or third parties send us correspondence about your activities or postings on the Site, we may collect such information into a file specific to you.
                                </p>
                                <p>
                                    2.3 Information that is publicly available or obtained through lawful means such as the Right to Information Act, 2005, shall not be considered as Sensitive Personal Data or Information under this policy.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h3 className="font-heading text-lg font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                                <span className="text-emerald-500">03.</span> USE OF INFORMATION
                            </h3>
                            <div className="space-y-4 text-sm font-body leading-relaxed text-gray-600">
                                <p>3.1 BNC shall use the information provided by You to provide the Services to You including but not limited to:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Customize Your experience by sending You personalized messages or suggestions.</li>
                                    <li>To respond to Your correspondences.</li>
                                    <li>To notify You with other services you might be interested in.</li>
                                    <li>Contact You when required or when asked for, including to remind You of an impending appointment.</li>
                                    <li>Customise Your services which might include customised messages, personal calls or other information that might be of your interest as per the information collected by you.</li>
                                    <li>For internal review in terms to provide better Services, understand Your feedback, or otherwise at Our discretion in ways not restricted by applicable laws in force.</li>
                                    <li>Use information collected statistically as permitted by law, in connection with the commercial and marketing efforts, subject to there being no breach of the contract between the User and BNC.</li>
                                    <li>Prevent, detect and investigate security breaches and potentially illegal or prohibited activities.</li>
                                </ul>
                                <p>
                                    3.2 You agree that we may use your personal information to contact you and deliver information to you that, in some cases, are targeted to your interests, such as targeted banner advertisements, administrative notices, product offerings, and communications relevant to your use of the Site. By using our Services and accepting this Privacy Policy, you expressly agree to receive this information. If you do not wish to receive these communications, we encourage you to opt out of the receipt of certain communications in your profile. You may make changes to your profile at any time.
                                </p>
                                <p>
                                    3.3 You are responsible for maintaining the accuracy of the information You submit to us, such as Your contact information provided. If Your Personal Information changes, You may correct, delete or amend the same. The same may be intimated to Us at info@bncmotors.in and we shall make efforts to make the required changes as soon as possible.
                                </p>
                                <p>
                                    3.4 BNC is not liable for any inaccurate Information provided by You. If it becomes known that You have provided inaccurate or incomplete Information, BNC reserves the right to discontinue providing Services to You at its sole discretion.
                                </p>
                                <p>
                                    3.5 We will retain Your Information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by applicable law for the purposes for which the Information may lawfully be used or is otherwise required under any other law for the time being in force.
                                </p>
                                <p>
                                    3.6 BNC may use Your Information for in-house analytical purposes to evaluate Services provided by it.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h3 className="font-heading text-lg font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                                <span className="text-emerald-500">04.</span> PUBLIC INFORMATION
                            </h3>
                            <div className="space-y-4 text-sm font-body leading-relaxed text-gray-600">
                                <p>
                                    Any Information revealed by You in any public forum on the Site or which is made public with Your consent are not governed by this Privacy Policy. It is highly recommended that You consider before disclosing any Information in public forum or making any Information public. Any complications arising out of such disclosure are at Your expense and BNC is in no way liable for the same. We recommend exercising caution when sharing personal information in public areas.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h3 className="font-heading text-lg font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                                <span className="text-emerald-500">05.</span> STORAGE AND SECURITY OF INFORMATION
                            </h3>
                            <div className="space-y-4 text-sm font-body leading-relaxed text-gray-600">
                                <p>
                                    5.1 BNC places the security of Your Information as high priority. We endeavour to follow the generally accepted industry standards to protect the Information given to Us, both during transmission and in storage.
                                </p>
                                <p>
                                    5.2 Our efforts are made in good faith to secure Your Information in a secure operating environment, which is not open to public. Where in we become aware of any use of Your Information not in accordance with this Privacy Policy and against the applicable law in force, we will make reasonable efforts to inform you of any unauthorized access or misuse of your information, as permitted by applicable law.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h3 className="font-heading text-lg font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                                <span className="text-emerald-500">06.</span> CONFIDENTIALITY & SECURITY
                            </h3>
                            <div className="space-y-4 text-sm font-body leading-relaxed text-gray-600">
                                <h4 className="font-bold">6.1 Controlling of Information</h4>
                                <p>6.1.1 You are at all times in control of your Information. BNC does not edit, alter or change the Information provided by You in any way. It is Your sole discretion as to what information shall be public, save and except the ones already declared by BNC.</p>
                                <p>6.1.2 BNC reserves the right to retain Information from the Users accounts, including but not limited to comply with law, prevent fraud, resolve disputes, enforce the Agreement and to take other actions as permitted by law.</p>
                                <p>6.1.3 It is Your responsibility to inform BNC immediately if any of Your data is lost, stolen, or accessed without Your authorization.</p>

                                <h4 className="font-bold mt-4">6.2 External links</h4>
                                <p>If You access any external websites whose links have been provided on any of the BNC Platforms, such access is at your risk. BNC does not assume any responsibility for any intrusion into Your privacy by External websites. You shall be governed by the privacy policy of such external websites as applicable and not by BNC. BNC does not in any way endorse any external websites. We encourage You to review the privacy policies of external sites before providing them with any personal data.</p>

                                <h4 className="font-bold mt-4">6.3 Consent</h4>
                                <p>Your use of the BNC Platforms is considered as an express consent to our Privacy Policy and unconditionally becoming a User of the BNC Platforms. If You do not agree to any terms of Our Privacy Policy kindly refrain from using the BNC Platforms. This Privacy Policy is to be read in conjunction to the Terms of Use provided on the BNC Platforms. Your visit to the BNC Platforms and use of the Services is subject to this Privacy Policy and the Terms of Use.</p>

                                <h4 className="font-bold mt-4">6.4 Changes to Privacy Policy</h4>
                                <p>Continued use of the Services after changes are made indicates Your acceptance of the updated Privacy Policy. If You continue to use Our Services even after such amendments to Our Privacy policy, it will constitute Your acceptance of the amended Privacy policy. It is solely Your responsibility to keep Yourself updated with respect to the changes to the Privacy Policy and it is highly recommended to periodically review Our BNC: Bharat New-Energy Company Platforms. The amended Privacy Policy supersedes all previous Privacy Policies. If You do not agree with any changes to the Privacy Policy, you must discontinue using the Services after such changes have been bought into effect. Any continued use is at Your risk. Unless stated otherwise, BNC current Privacy Policy applies to all information that BNC has about You and Your account, unless stated otherwise.</p>

                                <h4 className="font-bold mt-4">6.5 Contact Information</h4>
                                <p>In case of any comments, concerns or questions with respect to this Privacy Policy please contact Us at info@bncmotors.in.</p>
                            </div>
                        </section>

                        <section className="bg-emerald-50 border border-emerald-500/20 p-6 mt-8">
                            <h3 className="font-heading text-lg font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                                <ShieldCheck className="text-emerald-500" size={16} /> DATA PRIVACY OFFICER
                            </h3>
                            <div className="space-y-2 text-sm font-body text-black">
                                <p><span className="font-bold">Email:</span> info@bncmotors.in</p>
                                <p className="mt-4 text-gray-500 italic">We aim to respond to all privacy-related queries within 48 hours.</p>
                            </div>
                        </section>

                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default PrivacyModal;
