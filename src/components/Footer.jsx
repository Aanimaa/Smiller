import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-black border-t border-purple-500/20">
            <div className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="footer-inner flex flex-col items-center justify-center text-center">

                        <div className="w-full max-w-md mx-auto border-t border-purple-500/20 pt-6">
                            <p className="text-gray-400 flex items-center justify-center">
                                © 2025 Smiler. Tous droits réservés. Fait avec
                                <span className="mx-1 text-purple-400" style={{fontSize:16}}>❤️</span>
                                et beaucoup de code.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}