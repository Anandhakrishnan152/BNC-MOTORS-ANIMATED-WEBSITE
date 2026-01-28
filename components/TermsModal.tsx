import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, FileText } from 'lucide-react';

interface TermsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
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
                                <FileText className="text-emerald-600" size={20} />
                            </div>
                            <div>
                                <h2 className="font-heading text-xl font-black uppercase tracking-wider">Terms of Use</h2>
                                <p className="text-xs uppercase tracking-widest text-gray-400 font-heading">LEGAL_DOCUMENT_REF_v2024</p>
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
                    <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8 custom-scrollbar">

                        <section>
                            <h3 className="font-heading text-lg font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                                <span className="text-emerald-500">01.</span> NATURE AND APPLICABILITY OF TERMS
                            </h3>
                            <div className="space-y-4 text-sm font-body leading-relaxed text-gray-600">
                                <p>
                                    1.1. The following terms and conditions constitute an Agreement (hereinafter referred to as the “Agreement”) between You and BNC: Bharat New-Energy Company.(“BNC”, “We” or “Us”), the operator of www.bncmotors.in (the “Site”) and related applications, services and mobile applications provided by BNC (hereinafter when referred collectively called as ‘BNC Platforms’). This Agreement shall govern your use of Services (defined below), both as registered and non-registered user.
                                </p>
                                <p>
                                    1.2. By using or otherwise accessing the Services, and/or by registering with BNC, You agree to the terms of this Agreement, including the information disclosed here below, and to be bound by the same. If you do not agree with this Agreement, you should refrain from using the Services. Your access to any of BNC Platforms is also at the sole discretion of BNC.
                                </p>
                                <p>
                                    1.3 BNC reserves the right to add, substitute, modify or terminate any service provided by BNC from time to time. Such information shall be included in the terms and conditions as and when modified, and the burden is on you to keep yourself updated about such modifications. Your continued use of the Site and/or the Services following such posting shall constitute your affirmative acknowledgement of the Terms of Use or other applicable Agreement document, the modification, and agreement to abide and be bound by the Terms of Use or other applicable Agreement document, as amended.
                                </p>
                                <p>
                                    1.4. It is Your sole burden to keep yourself updated with respect to changes in the Terms of Use and Privacy Policy. If at any time You choose not to accept these terms of use, including following any such modifications hereto, then You must stop accessing BNC Platforms and using the Services.
                                </p>
                                <p>
                                    1.5 You agree that BN will not be liable to You for any suspension or discontinuation of any of the Services or portion thereof.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h3 className="font-heading text-lg font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                                <span className="text-emerald-500">02.</span> ELIGIBILITY
                            </h3>
                            <div className="space-y-4 text-sm font-body leading-relaxed text-gray-600">
                                <p>
                                    2.1 You must be 18 years of age or over to register with BNC or use BNC Platforms and the Services. If You do not qualify under these terms, do not use BNC Platforms or Services. By using BNC: Bharat New-Energy Company. Platforms and/or the Services, You represent and warrant that You have the right, authority, and capacity to enter into these Terms of Use and to abide by all of the terms and conditions set forth herein.
                                </p>
                                <p>
                                    2.2 If You are registering an account or using the Services on behalf of an individual or entity other than Yourself, You represent that You are authorized by such individual or entity to accept this Agreement on such individual’s or entity’s behalf.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h3 className="font-heading text-lg font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                                <span className="text-emerald-500">03.</span> COMPLIANCE WITH LAW
                            </h3>
                            <div className="space-y-4 text-sm font-body leading-relaxed text-gray-600">
                                <p>
                                    3.1 This Agreement is in compliance with all the relevant Laws, rules and regulations at the time being in force, including but not limited to the Indian Contract Act, 1872; Information Technology Act, 2000.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h3 className="font-heading text-lg font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                                <span className="text-emerald-500">04.</span> RESPONSIBILITIES OF THE USER
                            </h3>
                            <div className="space-y-4 text-sm font-body leading-relaxed text-gray-600">
                                <p>4.1 The User shall not host, display, upload, download, modify, publish, transmit, update or share any information that —</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Belongs to another person and to which the User does not have any right to;</li>
                                    <li>Is grossly harmful, harassing, blasphemous defamatory, obscene, pornographic, paedophilic, libellous, invasive of another's privacy, hateful, or racially, ethnically objectionable, disparaging, relating or encouraging money laundering or gambling, or otherwise unlawful in any manner whatever;</li>
                                    <li>Harm minors in any way;</li>
                                    <li>Infringes any patent, trademark, copyright or other proprietary rights;</li>
                                    <li>Violates any law for the time being in force;</li>
                                    <li>Deceives or misleads the addressee about the origin of such messages or communicates any information which is grossly offensive or menacing in nature;</li>
                                    <li>Impersonate another person;</li>
                                    <li>Contains software viruses or any other computer code, files or programs designed to interrupt, destroy or limit the functionality of any computer resource;</li>
                                    <li>Threatens the unity, integrity, defence, security or sovereignty of India, friendly relations with foreign states, or public order or causes incitement to the commission of any cognizable offence or prevents investigation of any offence or is insulting any other nation;</li>
                                    <li>Violates or attempts to violate the integrity of the security of the BNC Platforms.</li>
                                </ul>
                                <p>4.2 User shall not use any of BNC Platforms apart from the reasons provided for.</p>
                                <p>4.3 User shall not intentionally furnish any incomplete, false or inaccurate information.</p>
                                <p>4.4 User shall not make any unsolicited communications to other Users.</p>
                                <p>4.5 User shall not misuse the contents provided on the Site.</p>
                            </div>
                        </section>

                        <section>
                            <h3 className="font-heading text-lg font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                                <span className="text-emerald-500">05.</span> REPRESENTATION OF BNC OF INFORMATION
                            </h3>
                            <div className="space-y-4 text-sm font-body leading-relaxed text-gray-600">
                                <p>
                                    5.1 BNC reserves the right to advertise on its Platforms but does not endorse any services or products advertised. Users are advised to use their discretion with respect to advertisements.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h3 className="font-heading text-lg font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                                <span className="text-emerald-500">06.</span> REPRESENTATION OF USER
                            </h3>
                            <div className="space-y-4 text-sm font-body leading-relaxed text-gray-600">
                                <p>The User represents and warrants that he/she/it:</p>
                                <p>6.1 Shall not use the Site in any manner that could damage, disable, overburden, or impair our servers or networks, or interfere with any other party's use and enjoyment of the BNC Platforms or the Services.</p>
                                <p>6.2 Shall use the Site and the Services for lawful, non-commercial purposes.</p>
                                <p>6.3 Shall not attempt to gain unauthorized access to any of the Services, user accounts, or computer systems or networks, through hacking, or any other means, and shall be prosecuted for the same.</p>
                                <p>6.4 Shall resolve any dispute between You and any other User arising from any transaction hereunder directly with the User.</p>
                                <p>6.5 Shall be responsible for all use of the Services and for all use of Your Personal Information, including use by others to whom You have given Your PERSONAL Information.</p>
                                <p>6.6 If You are registering an account or using the Services on behalf of an individual or entity other than Yourself, You represent that You are authorized by such individual or entity to accept this Agreement on such individual’s or entity’s behalf.</p>
                            </div>
                        </section>

                        <section>
                            <h3 className="font-heading text-lg font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                                <span className="text-emerald-500">07.</span> PRIVACY
                            </h3>
                            <div className="space-y-4 text-sm font-body leading-relaxed text-gray-600">
                                <p>
                                    We do not disclose your personal information to third parties for their marketing purposes without your explicit consent and we only use and disclose Your Information as described in the Privacy Policy. We view protection of Users' privacy as a very important community principle. We understand clearly that you and Your Information is one of our most important assets. You acknowledge and agree that Your Information and including any personal information would need to be provided by you to other Users through the Site when you seek to transact with such Users on the Site. You further agree that we have no control over the recipient Users of Your Information since such Users are selected by you when you choose to interact or transact with them. You are required to give your consent in writing regarding the storage and usage of personal data obtained through the tracking device on the vehicles sold by the Company.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h3 className="font-heading text-lg font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                                <span className="text-emerald-500">08.</span> DISCLAIMER OF WARRANTIES
                            </h3>
                            <div className="space-y-4 text-sm font-body leading-relaxed text-gray-600">
                                <p>The User represents and warrants that he/she/it:</p>
                                <p>8.1 The Site is only a venue where Users may meet and interact with BNC and its dealers for purchase of BNC products and services.</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>BNC is not responsible for any non-performance or breach of any contract entered between the User and third parties. BNC cannot and does not guarantee that the concerned Users will perform any transaction concluded on the Site. BNC shall not and is not required to mediate or resolve any dispute or disagreement between the User and any third party;</li>
                                    <li>BNC does not make any representation or warranty as to the attributes (such as legal title, creditworthiness, identity, etc.) of any of its Users. You are advised to independently verify the bona fides of any particular User that you choose to deal with on the Site and use your best judgement in that behalf;</li>
                                    <li>The Site is a channel of communication whereby the Users can reach a larger base to authorised BNC dealers of various models. BNC is only providing a platform for communication and it is agreed that the contract for sale of any of the products or services shall be a strictly bipartite contract between the seller and the winning buyer. At no time shall any right, title or interest over the Bharat New-Energy Company products and services vest with BNC nor shall BNC have any obligations or liabilities in respect of such contract.</li>
                                    <li>You shall independently agree upon the manner and terms and conditions of delivery, payment, insurance etc. with the other Users that you transact with;</li>
                                    <li>You release and indemnify BNC and/or any of its officers and representatives from any cost, damage, liability or other consequence of any of the actions of the Users of the Site and specifically waive any claims that you may have in this behalf under any applicable law. Notwithstanding its reasonable efforts in that behalf, BNC cannot control the information provided by other Users which is made available on the Site. You may find another User's information to be offensive, harmful, inaccurate, or deceptive. Please use caution, common sense, and practice safe trading when using the Site.</li>
                                </ul>
                            </div>
                        </section>

                        <section className="bg-emerald-50 border border-emerald-500/20 p-6 mt-8">
                            <h3 className="font-heading text-lg font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                                <Shield className="text-emerald-500" size={16} /> CONTACT & GRIEVANCE OFFICER
                            </h3>
                            <div className="space-y-2 text-sm font-body text-black">
                                <p><span className="font-bold">Email:</span> info@bncmotors.in</p>
                                <p><span className="font-bold">Contact:</span> 0422 3515613</p>
                                <p className="mt-4 text-gray-500 italic">The grievance officer will acknowledge receipt of any consumer complaint within 48 (Forty-Eight) hours of receipt thereof and would redress each complaint within 1 (One) month from the date of such complaint.</p>
                            </div>
                        </section>

                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default TermsModal;
