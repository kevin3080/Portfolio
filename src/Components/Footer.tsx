import Translation from "../translate/Translation";

export const Footer = () => {
   return (
      <footer className={`p-2 text-center bg-[#05112a]`}>
         <cite className="font-mono text-sm flex flex-col">
            <div className="text-white" >
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
