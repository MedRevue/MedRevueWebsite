import React from 'react';

import Image1 from '../../../img/past-shows-header.jpg';

import './PastShows.scss';

export default function PastShows() {
  return (
    <div id="faqbg">
      <img className="header" src={Image1} alt="header" />
      <div id="faq">
        <p className="title">PAST SHOWS</p>
        <p>UNSW Med Revue has been in production since 1975, making our 2022 show the 47th! Check out all the parody themes and past directors/producers below!</p>
        <table id="show-tables">
          <thead>
            <tr>
              <th>Year</th>
              <th>Show Name</th>
              <th>Directors</th>
              <th>Producers</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2021</td>
              <td>Breaking Bones</td>
              <td>
                Toby Marlow<br />
                Jessica Carter
              </td>
              <td>
                Lucy Sun<br />
                Natashia Yang<br />
                Karl Cheng<br />
                Steven Yin
              </td>
            </tr>
            <tr>
              <td>2020</td>
              <td>Breaking Bones (postponed to 2021 due to COVID-19)</td>
              <td>
                Toby Marlow<br />
                Jessica Carter<br />
                Alen Huang
              </td>
              <td>
                Lucy Sun<br />
                Natashia Yang<br />
                Karl Cheng<br />
                Henry Chen
              </td>
            </tr>
            <tr>
              <td>2019</td>
              <td>The Golden Probes Awards</td>
              <td>
                Ashlegh Coles<br />
                Shamis El-Daoud<br />
                Kevin Mortimer
              </td>
              <td>
                Yiwei Shao<br />
                Jessica Yang
              </td>
            </tr>
            <tr>
              <td>2018</td>
              <td>The Incredipills</td>
              <td>
                Cia Caliwag<br />
                Jarrah Purcell-Smith
              </td>
              <td>
                Chenny Chen<br />
                Stella Ding<br />
                Shelley Wang
              </td>
            </tr>
            <tr>
              <td>2017</td>
              <td>Booty and the Beast</td>
              <td>
                Linda Cui<br />
                Adrian Sit<br />
                Samuel Tieu
              </td>
              <td>
                Cathy Huynh<br />
                Martin Tran<br />
                Sarah Wu
              </td>
            </tr>
            <tr>
              <td>2016</td>
              <td>Doctor Flu</td>
              <td>
                Olivia Halliday<br />
                Jessica Lyon<br />
                Catherine Yin
              </td>
              <td>
                Alvin Chan<br />
                Ankali Selvaratnam<br />
                Jiehao Wang<br />
                Yooree Woo
              </td>
            </tr>
            <tr>
              <td>2015</td>
              <td>Super Cardio Bros</td>
              <td>Alissa Osada-Phornsiri<br />
              Matthew Yuen<br />
              Melissa Tran</td>
              <td>Amna Al-Wahab<br />
              Olivia Halliday<br />
              Baozhing Teng<br />
              Mike Wu</td>
              </tr>
              <tr>
              <td>2014</td>
              <td>Peter Pandemic</td>
              <td>Sam Campbell<br />
              Tony San<br />
              Viktor Sokolovski</td>
              <td>John Luu<br />
              Jason Oh<br />
              Natalie Tang<br />
              Rachel Yeo</td>
              </tr>
              <tr>
              <td>2013</td>
              <td>Cirque du Surgery</td>
              <td>Scott Ashby<br />
              Amy Brandon<br />
              Monish Maharaj</td>
              <td>Eleni van Gelder<br />
              Tracey Ho<br />
              Brendan Lim<br />
              Michelle Tang</td>
              </tr>
              <tr>
              <td>2012</td>
              <td>PokeMed: Gotta Cure Em All!</td>
              <td>Ben Chau<br />
              Robert Karlen<br />
              Ariadne Keldoulis</td>
              <td>Jerold Chan<br />
              Janice Tan<br />
              Adele The<br />
              Victor Wong</td>
              </tr>
              <tr>
              <td>2011</td>
              <td>Surgery Street</td>
              <td>Justin Chau<br />
              Priyanca Menon<br />
              Ahsas Ranjan</td>
              <td>Swahnnya de Almeida<br />
              Max Keldoulis<br />
              Jonathan Li<br />
              Charmaine Pan</td>
              </tr>
              <tr>
              <td>2011</td>
              <td>Deja Revue<br />
              (Best of Med and Law Revue 2008-2010)</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              </tr>
              <tr>
              <td>2010</td>
              <td>Procrastinator: Infection</td>
              <td>Kirit Chaudhary<br />
              Sarina Huang<br />
              Vincent Law</td>
              <td>Nilusha Shivraj<br />
              Dale Sun<br />
              Zoe Page</td>
              </tr>
              <tr>
              <td>2009</td>
              <td>Pirates of Cardiology: Dead Man’s Chest</td>
              <td>Jack Han<br />
              Robyn Hutchinson<br />
              Hein P</td>
              <td>Melissa Lau<br />
              Charles Ma<br />
              Tran Nguyen<br />
              Owen Tsao</td>
              </tr>
              <tr>
              <td>2008</td>
              <td>Happy Foetus</td>
              <td>Laura Dawson<br />
              Tessa Kennedy<br />
              Glenn Leong</td>
              <td>Matthew Nguyen<br />
              Paul Sabau<br />
              Sarina Huang<br />
              Kai Loon Tan</td>
              </tr>
              <tr>
              <td>2007</td>
              <td>Kill Bulk Bill</td>
              <td>Bambul Shakibaei<br />
              Penny Spirou<br />
              Laura Whitehouse</td>
              <td>Georgie Cooke<br />
              Beverley Hiew<br />
              Stephany Hiew</td>
              </tr>
              <tr>
              <td>2006</td>
              <td>Thrush Hour</td>
              <td>Rob Lawther<br />
              Bridget Poon<br />
              Rajeev Verma</td>
              <td>Leigh Dunlop<br />
              Alec Rickard<br />
              Rachel Smith</td>
              </tr>
              <tr>
              <td>2006</td>
              <td>Law and Orderlies<br />
              (Best of Med and Law Revue 2000-2005)</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              </tr>
              <tr>
              <td>2005</td>
              <td>Mary’s Poppin’</td>
              <td>Richard Dixon<br />
              Morgan Mitchell<br />
              Kahli Sanders</td>
              <td>Michelle Durkan<br />
              Caitlin Hurley<br />
              Blake Sandery</td>
              </tr>
              <tr>
              <td>2004</td>
              <td>The Cat with the Fat</td>
              <td>Steven Bilkey<br />
              Chris Jolly<br />
              Blake Sandery</td>
              <td>Ken Liu<br />
              Morgan Mitchell<br />
              Bridget Poon</td>
              </tr>
              <tr>
              <td>2003</td>
              <td>8 Inch</td>
              <td>Emma McKenna<br />
              Anand Raja<br />
              Tom Robinson</td>
              <td>Laura Coleman<br />
              Sarah Magnell</td>
              </tr>
              <tr>
              <td>2002</td>
              <td>Episode Poo: The Attack of the Colons</td>
              <td>Anand Rajan<br />
              Jinny Skerman<br />
              Gabby Paterson</td>
              <td>Jason Appleby<br />
              CY Chim<br />
              Michael Richardson</td>
              </tr>
              <tr>
              <td>2001</td>
              <td>Medicator</td>
              <td>BJ Glover<br />
              Gabby Paterson<br />
              Jinny Skerman</td>
              <td>Brian Francisco<br />
              Sage Scroope</td>
              </tr>
              <tr>
              <td>2001</td>
              <td>Comedy of the Chemical Generation<br />
              (Best of Med Revue 1996-2000)</td>
              <td>Steve Davey<br />
              Michael Wong</td>
              <td>Mic Mehmet<br />
              Michael Wong</td>
              </tr>
              <tr>
              <td>2000</td>
              <td>American Booty</td>
              <td>Jason Appleby<br />
              Keith Lim<br />
              Renee Lim</td>
              <td>Adam Hochroth<br />
              Kelly McManus<br />
              Alice Rooney</td>
              </tr>
              <tr>
              <td>1999</td>
              <td>PMT: Pre-Millenium Tension</td>
              <td>Lainie Arnold<br />
              Renee Lim<br />
              Richard Pang</td>
              <td>Kevin Lurie</td>
              </tr>
              <tr>
              <td>1998</td>
              <td>South Cark</td>
              <td>Lisa Porter<br />
              Michael Wong</td>
              <td>Lanie Arnold<br />
              Amanda Graupner<br />
              Joe Heiss</td>
              </tr>
              <tr>
              <td>1997</td>
              <td>12 Junkies</td>
              <td>Seamus Byrne<br />
              Steve Davey<br />
              Matthew Ding</td>
              <td>David Eyers<br />
              Richard Pang<br />
              Lisa Porter<br />
              Jeff Selby</td>
              </tr>
              <tr>
              <td>1996</td>
              <td>Glitter: The Medical Mystery Tour</td>
              <td>Jeff Selby<br />
              Matt Ewart<br />
              Mic Mehmet<br />
              Stewart Condon</td>
              <td>Alexi Warn<br />
              Michael Wong<br />
              Terry Lurie</td>
              </tr>
              <tr>
              <td>1995</td>
              <td>Heart Rate High: The Bex Years of our Lives<br />
              (Best of Med Revue 1990-1995)</td>
              <td>Danny Kingsley<br />
              Andy Ford (Musical Director)</td>
              <td>Aiveen Bannan<br />
              Matt Kinchington</td>
              </tr>
              <tr>
              <td>1994</td>
              <td>All the President’s Phlegm</td>
              <td>Lindy Elder<br />
              Tim Levy<br />
              Richard Brus (Musical Director)</td>
              <td>Nidia Danza<br />
              Julian Klentenberg</td>
              </tr>
              <tr>
              <td>1993</td>
              <td>Missing in Traction</td>
              <td>Darren Cathcart<br />
              Danny Kingsley<br />
              Andy Ford (Musical Director)</td>
              <td>Nidia Danza<br />
              Simon Harper</td>
              </tr>
              <tr>
              <td>1992</td>
              <td>Herniator 2 (First Revue staged in Science Theatre)</td>
              <td>Tim Downs<br />
              Danny Kingsley<br />
              Peter Thomas<br />
              Andy Ford (Musical Director)</td>
              <td>Aileen Banaan<br />
              Matt Kinchinton</td>
              </tr>
              <tr>
              <td>1991</td>
              <td>Presumed Impotent</td>
              <td>Danny Kingsley<br />
              Glenn Michel<br />
              Steve Myers<br />
              Andy Ford (Musical Director)</td>
              <td>Jackie Boustany<br />
              Lily Tomas</td>
              </tr>
              <tr>
              <td>1990</td>
              <td>Zen Cabbage</td>
              <td>Ramesh Manoucha<br />
              Craig McGrath<br />
              Andy Ford (Musical Director)</td>
              <td>Sean Murphy</td>
              </tr>
              <tr>
              <td>1990</td>
              <td>A Magnificent Set of Steak Knives<br />
              (Best of Show)</td>
              <td>Phil Virgona</td>
              <td>Gary Latham</td>
              </tr>
              <tr>
              <td>1989</td>
              <td>Satanic Nurses</td>
              <td>Anthony Delaney<br />
              Max Malev<br />
              Ramesh Manoucha<br />
              Nick Ford (Musical Director)</td>
              <td>John Van Der Kallen<br />
              Elke Roeske</td>
              </tr>
              <tr>
              <td>1988</td>
              <td>Gastro Boy</td>
              <td>Sean Kennedy<br />
              Gary Latham<br />
              Michael Novy<br />
              Emmanuel Dovellos (Musical Director)</td>
              <td>Anne Brady</td>
              </tr>
              <tr>
              <td>1987</td>
              <td>Dark Side of the ToastA</td>
              <td>Max Malev<br />
              Sean Kennedy</td>
              <td>&nbsp;</td>
              </tr>
              <tr>
              <td>1986</td>
              <td>Twilight Moan</td>
              <td>Nick Ignatenko<br />
              Simon Adamo</td>
              <td>&nbsp;</td>
              </tr>
              <tr>
              <td>1985</td>
              <td>All Crotches Great &amp; Small</td>
              <td>Phil Birgona<br />
              Dave Rowes</td>
              <td>&nbsp;</td>
              </tr>
              <tr>
              <td>1984</td>
              <td>Doctopussy</td>
              <td>Alastair Taylor<br />
              Dave Rowe<br />
              Phil Virgona</td>
              <td>&nbsp;</td>
              </tr>
              <tr>
              <td>1983</td>
              <td>ET: The Extra Testicle</td>
              <td>Adrian Cohen<br />
              Mark Davies<br />
              Angelo Virgona</td>
              <td>Robert Anderson<br />
              Jim Hersey</td>
              </tr>
              <tr>
              <td>1982</td>
              <td>Merry Maladies: What’s Up Doc?</td>
              <td>Ken Armstrong<br />
              Mark Davies</td>
              <td>Stuart Stapleton<br />
              Richard Webster</td>
              </tr>
              <tr>
              <td>1981</td>
              <td>A Wet Summer Night’s Dream</td>
              <td>Les Grujicic<br />
              Michael Kohn<br />
              Paul MacDonald</td>
              <td>Adrian Cohen<br />
              Jono Howell<br />
              Helen O’Connor</td>
              </tr>
              <tr>
              <td>1980</td>
              <td>My Brilliant Diahorrea</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              </tr>
              <tr>
              <td>1979</td>
              <td>The Sound of Mucus</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              </tr>
              <tr>
              <td>1978</td>
              <td>Gross Encounters of the Turd Kind</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              </tr>
              <tr>
              <td>1977</td>
              <td>It’s Epidemic!</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              </tr>
              <tr>
              <td>1976</td>
              <td>Pandemonia</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              </tr>
              <tr>
              <td>1975</td>
              <td>Rumpleforeskin</td>
              <td>Andrew Field<br />
              Bob Wells</td>
              <td>Greg Deacon<br />
              Andrew Field</td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
