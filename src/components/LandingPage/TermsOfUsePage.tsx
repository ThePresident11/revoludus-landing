"use client";

export default function TermsOfUsePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl font-bold mb-8">Uvjeti korištenja</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">1. Opće odredbe</h2>
        <p>
          Ovi Uvjeti korištenja uređuju odnos između korisnika i Revoludus platforme. Korištenjem ove web stranice ili aplikacije, potvrđujete da ste pročitali, razumjeli i prihvatili sve navedene uvjete. Ukoliko se ne slažete s bilo kojim dijelom Uvjeta, molimo vas da ne koristite platformu.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">2. Korištenje platforme</h2>
        <p>
          Revoludus omogućuje centralizirano upravljanje sportskim sadržajem za klubove, trenere i organizacije. Korisnici su dužni koristiti platformu na zakonit način, bez zloupotrebe ili ometanja rada sustava. Svi uneseni podaci ostaju vlasništvo korisnika, no Revoludus zadržava pravo obrade podataka u skladu s pravilima privatnosti.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">3. Prava i obveze korisnika</h2>
        <p>
          Korisnici su odgovorni za čuvanje svojih pristupnih podataka i dužni su prijaviti svaku neovlaštenu upotrebu svojih računa. Nije dopušteno objavljivati neprimjeren sadržaj, kršiti autorska prava trećih strana niti ugrožavati sigurnost platforme ili drugih korisnika.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">4. Intelektualno vlasništvo</h2>
        <p>
          Svi sadržaji, dizajn, kod i ostali elementi platforme Revoludus zaštićeni su autorskim pravima i drugim zakonima o intelektualnom vlasništvu. Nije dozvoljeno kopiranje, distribucija ili izmjena bilo kojeg dijela bez prethodnog pismenog odobrenja.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">5. Ograničenje odgovornosti</h2>
        <p>
          Revoludus nije odgovoran za eventualnu štetu nastalu korištenjem ili nemogućnošću korištenja platforme, uključujući gubitak podataka ili poslovnih prilika. Trudimo se održavati visoku razinu dostupnosti i sigurnosti, no ne jamčimo neprekidno funkcioniranje.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">6. Promjene uvjeta</h2>
        <p>
          Zadržavamo pravo izmjene ovih Uvjeta korištenja u bilo kojem trenutku. Svaka izmjena će biti jasno naznačena na ovoj stranici, a nastavak korištenja platforme podrazumijeva prihvaćanje novih uvjeta.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">7. Kontakt</h2>
        <p>
          Za sva pitanja vezana uz uvjete korištenja, možete nas kontaktirati putem emaila: <a href="mailto:info@revoludus.com" className="text-blue-600 underline">info@revoludus.com</a>
        </p>
      </section>
    </main>
  );
}
