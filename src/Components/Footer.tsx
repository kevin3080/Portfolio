import Translation from "../translate/Translation";

export const Footer = ({ theme }: { theme: string }) => {
   return (
      <footer className={`p-2 text-center ${theme === 'dark' ? 'bg-black' : 'bg-[#f5f5f5]'}`}>
         <cite className="font-mono text-sm flex flex-col">
            <div>
               <Translation translationKey="footer.description" />
               <a href="https://github.com/kevin3080" target="_blank">
                  Kevin Pernia
               </a>
            </div>
            <Translation style="font-light text-[11px] text-gray-400" translationKey="footer.copyright" />
         </cite>
      </footer>
   );
};
