"use client";

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl font-bold mb-8">Politika privatnosti</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">1. Uvod</h2>
        <p>
          Ova Politika privatnosti opisuje kako platforma Revoludus prikuplja, koristi, pohranjuje i štiti osobne podatke korisnika. Korištenjem platforme, dajete suglasnost na prakse opisane u ovoj politici.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">2. Vrste podataka koje prikupljamo</h2>
        <p>
          Možemo prikupljati osobne podatke kao što su ime, email adresa, naziv organizacije, IP adresa te podatke o korištenju platforme. Također, možemo koristiti kolačiće (cookies) za poboljšanje korisničkog iskustva.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">3. Svrha prikupljanja podataka</h2>
        <p>
          Vaše podatke koristimo radi:
          <ul className="list-disc list-inside mt-2">
            <li>omogućavanja pristupa platformi</li>
            <li>unapređenja funkcionalnosti i korisničkog iskustva</li>
            <li>slanja važnih obavijesti i ažuriranja</li>
            <li>statističke analize korištenja</li>
          </ul>
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">4. Dijeljenje podataka s trećim stranama</h2>
        <p>
          Ne prodajemo, ne iznajmljujemo niti dijelimo vaše osobne podatke s trećim stranama, osim ako je to zakonski obvezno ili nužno za funkcioniranje platforme (npr. hosting, sigurnosne usluge).
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">5. Sigurnost podataka</h2>
        <p>
          Primjenjujemo tehničke i organizacijske mjere za zaštitu vaših podataka od neovlaštenog pristupa, izmjena, gubitka ili uništenja. Pristup korisničkim računima zaštićen je lozinkom.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">6. Prava korisnika</h2>
        <p>
          Korisnici imaju pravo na pristup svojim podacima, ispravak netočnih podataka, brisanje podataka te povlačenje privole za obradu podataka. Za ostvarivanje prava možete nas kontaktirati putem e-maila.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">7. Promjene politike</h2>
        <p>
          Zadržavamo pravo izmjene ove politike privatnosti. Sve promjene bit će objavljene na ovoj stranici. Preporučujemo povremeno provjeravanje sadržaja.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">8. Kontakt</h2>
        <p>
          Za sva pitanja vezana uz zaštitu privatnosti, obratite nam se na:
          <a href="mailto:privacy@revoludus.com" className="text-blue-600 underline ml-1">privacy@revoludus.com</a>
        </p>
      </section>
    </main>
  );
}
