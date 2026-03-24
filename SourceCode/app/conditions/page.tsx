// app/conditions/page.tsx
import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";

export const metadata: Metadata = {
  title: "Terms and Conditions - Engame",
  description: "Engame Terms and Conditions",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function ConditionsPage() {
  return (
    <Section>
      <div className="py-10 font-lato text-base space-y-4 max-w-3xl">
        <p><b>Terms and Conditions</b></p>
        <p>
          ENIDEA SDN BHD (Company No. 1262854-M) a company incorporated in Malaysia
          under the Companies Act 2016, and having its business office at First
          Floor, 80, Jalan SS2/55, Petaling Jaya, 47300, Selangor (hereinafter
          referred to as &quot;Engame&quot;).
        </p>
        <p>
          Engame built the Tap Master app or web app as a Free app (hereinafter
          referred to as &quot;Game&quot;).
        </p>
        <p>
          Please read this Terms and Conditions carefully, as it sets out the basis
          upon which we license the Game for use.
        </p>
        <p>
          Before you play the Game from our website or the platform of one of our
          appointed distribution partners, you will be asked to give your express
          agreement to the provisions of this Terms and Conditions.
        </p>
        <p>
          By agreeing to be bound by this Terms and Conditions, you warrant to us
          that you are at least 13 years of age; if you are not, you must not use
          the Game.
        </p>
        <p>
          WARNING: The light patterns in some video games may trigger epileptic
          seizures or blackouts in a very small number of individuals. If you have
          an epileptic condition, you should consult a medical professional before
          playing the Game.
        </p>

        <p><b>1. Definitions</b></p>
        <p>
          1.1 In this Terms and Conditions, except to the extent expressly provided
          otherwise:
        </p>
        <p>&quot;Distribution Platform&quot; means any digital distribution platform operated by a third party by means of which the User lawfully acquired the Game;</p>
        <p>&quot;Documentation&quot; means any documentation for the Game produced by the Licensor and supplied or made available by the Licensor to the User;</p>
        <p>&quot;Effective Date&quot; means the date upon which the User accepts the terms of this Terms and Conditions;</p>
        <p>&quot;Force Majeure Event&quot; means an event, or a series of related events, that is outside the reasonable control of the party affected (including failures of the internet or any public telecommunications network, hacker attacks, power failures, industrial disputes, changes to the law, disasters, epidemics, pandemics, explosions, fires, floods, riots, terrorist attacks and wars);</p>
        <p>&quot;Game&quot; means Tap Master as modified, patched, updated and upgraded from time to time by or with the authorisation of the Licensor;</p>
        <p>&quot;Intellectual Property Rights&quot; means all intellectual property rights wherever in the world, whether registrable or unregistrable, registered or unregistered;</p>
        <p>&quot;User&quot; means the person to whom the Licensor grants a right to use the Game under this Terms and Conditions.</p>

        <p><b>2. Credit</b></p>
        <p>2.1 This document was created using a template from Docular (https://docular.net).</p>

        <p><b>3. Term</b></p>
        <p>3.1 This Terms and Conditions shall come into force upon the Effective Date.</p>
        <p>3.2 This Terms and Conditions shall continue in force indefinitely, subject to termination in accordance with Clause 10 or any other provision of this Terms and Conditions.</p>

        <p><b>4. Licence</b></p>
        <p>4.1 The Licensor hereby grants to the User a worldwide, non-exclusive, non-transferable licence to install and use the Game on Permitted Hardware for private and domestic purposes.</p>
        <p>4.2 The User may permit family members and friends to use the installation of the Game on the Permitted Hardware.</p>
        <p>4.3 The User must not make the Game available for download by others, modify or decompile the Game, or use the Game in contravention of any applicable laws.</p>

        <p><b>5. Intellectual Property Rights</b></p>
        <p>5.1 Nothing in this Terms and Conditions shall constitute an assignment or transfer of any Intellectual Property Rights of the Licensor.</p>
        <p>5.2 All Intellectual Property Rights in the Game and the works and materials comprised in the Game are reserved to the Licensor and its licensors.</p>

        <p><b>6. Limitations and Exclusions of Liability</b></p>
        <p>6.1 Nothing in this Terms and Conditions will limit or exclude any liability for death or personal injury resulting from negligence, or for fraud or fraudulent misrepresentation.</p>
        <p>6.2 The Licensor will not be liable to the User in respect of any losses arising out of a Force Majeure Event.</p>
        <p>6.3 The Licensor will not be liable to the User in respect of any business losses, loss of data, or any special, indirect or consequential loss or damage.</p>

        <p><b>7. Termination</b></p>
        <p>7.1 The Licensor may terminate this Terms and Conditions immediately by giving written notice of termination to the User if the User commits any breach of this Terms and Conditions.</p>

        <p><b>8. Effects of Termination</b></p>
        <p>8.1 Upon termination, the User must immediately cease to use the Game and irreversibly delete all copies within 2 days.</p>

        <p><b>9. General</b></p>
        <p>9.1 This Terms and Conditions shall be governed by and construed in accordance with Malaysian law.</p>
        <p>9.2 The courts of Malaysia shall have exclusive jurisdiction to adjudicate any dispute arising under or in connection with this Terms and Conditions.</p>

        <p><b>10. Contact Us</b></p>
        <p>
          If you have any questions or suggestions about our Terms and Conditions,
          do not hesitate to contact us at{" "}
          <a href="mailto:enquiry@engame.tech" className="underline">
            enquiry@engame.tech
          </a>
        </p>
      </div>
    </Section>
  );
}
