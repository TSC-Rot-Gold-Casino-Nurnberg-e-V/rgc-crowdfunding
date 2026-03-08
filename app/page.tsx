import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  HeartIcon,
  SparklesIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { BackgroundImage } from "@/components/BackgroundImage";
import { ProgressBar } from "@/components/ProgressBar";
import DonationControls from "@/components/DonationControls";

import handToHandImage from "../public/handToHand.jpg";
import handToHandImage2 from "../public/handToHand_2.jpg";
import circleImage from "../public/circle.jpg";
import ninaImage from "../public/nina.jpg";
import hendrikLeneImage from "../public/hendirk_lene.jpg";

export default function Home() {
  return (
    <main className="mb-8">
      {/* Hero Section */}
      <section id="start">
        <BackgroundImage />
        <div className="container pt-12 pb-8 text-center">
          <div className="flex mx-auto w-fit items-center gap-2 bg-primary-300 rounded-full text-sm text-primary-900 font-semibold px-3 py-1 mb-6">
            <SparklesIcon className="shrink-0 size-5" />
            <div>Latein A-Team · RGC Nürnberg</div>
          </div>
          <h1 className="text-4xl mb-4 sm:text-5xl font-serif text-base-50 drop-shadow-lg drop-shadow-base-950 font-bold">
            Glitzer, Leidenschaft &amp; neue Ziele:
            <br />
            Wir brauchen dich!
          </h1>
          <p className="mb-6 sm:text-lg text-base-100 drop-shadow-lg drop-shadow-base-950">
            Unterstütze das Latein A-Team des RGC Nürnberg auf dem Weg in die 1.
            Bundesliga
          </p>
          <Link
            href="#spenden"
            className="inline-block not-prose bg-secondary-700 text-lg hover:bg-secondary-600 px-6 py-3 rounded-full transition-colors font-bold cursor-pointer !text-white"
          >
            Ich unterstütze euch!
          </Link>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="container mt-12 scroll-mt-16">
        <div className="bg-base-800/80 rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-base-50 mb-6 text-center">
            Neue Musik. Neue Schritte.
            <br />
            <span className="text-primary-300">
              Und jetzt fehlt nur noch eins: Der neue Look.
            </span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 items-center">
            <div className="space-y-4">
              <p className="text-base-200">
                Wenn unser A-Team in der neuen Saison das Parkett betritt, muss
                alles stimmen: Choreografie und Bewegung, die Musik – und die
                Optik.
              </p>
              <p className="text-base-200">
                Dafür brauchen wir neue Outfits für unsere Mädels und Jungs.
              </p>
              <p className="text-base-200">
                Unsere Lateinformation trainiert hart für den Weg in die 1.
                Bundesliga.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <Image
                src={handToHandImage}
                alt="Lateinformation Hand-in-Hand"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="container mt-6">
        <div className="bg-base-800/80 rounded-3xl p-8">
          <div className="grid sm:grid-cols-2 gap-6 items-center">
            <div className="rounded-2xl overflow-hidden sm:order-first order-last">
              <Image
                src={circleImage}
                alt="Formation im Kreis"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-4">
              <p className="text-base-200">
                Perfektion auf dem Parkett entsteht dabei nicht nur durch
                Training, sondern auch durch das richtige Auftreten.
              </p>
              <p className="text-base-200">
                Damit unsere neue Vision so richtig lebendig wird, brauchen wir
                maßgeschneiderte Kostüme, die unser Thema auch optisch
                unterstützen.
              </p>
              <p className="text-base-200 font-semibold text-primary-300">
                Doch Qualität hat ihren Preis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Goal Section */}
      <section id="ziel" className="container mt-6 scroll-mt-16">
        <div className="bg-base-800/80 rounded-3xl p-8">
          <div className="flex justify-between gap-2 mb-4 text-base-50">
            <h2 className="text-3xl font-bold">Unser Ziel</h2>
            <HeartIcon className="size-8 shrink-0" />
          </div>
          <div className="text-4xl sm:text-5xl font-bold text-primary-300 text-center my-6">
            12.000 €
          </div>
          <p className="text-center text-base-100 text-xl font-semibold mb-6">
            für neue Kostüme
          </p>
          <ProgressBar current={0} />
          <p className="text-base-200 mt-6">
            Jeder Euro fließt direkt in Stoffe, Design und meisterliche
            Schneiderkunst, damit wir Nürnberg wieder strahlend vertreten
            können.
          </p>
          <p className="text-base-200 mt-4">
            Damit förderst du direkt den Nürnberger Spitzensport und junge
            Talente bekommen die Bühne, die sie verdienen.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="container mt-6 scroll-mt-16">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-base-800/80 flex flex-col justify-between rounded-3xl p-8 pb-6">
            <div className="flex justify-between gap-2 mb-4 text-base-50">
              <h2 className="text-3xl font-bold">Unser Team</h2>
              <UserGroupIcon className="size-8 shrink-0" />
            </div>
            <p className="text-base-200 mb-4">
              Hilf uns, Bewegung in Erfolg zu verwandeln.
            </p>
            <p className="text-base-200 text-lg font-semibold">
              Ob 5, 50 oder 500 Euro – deine Spende bringt uns aufs Parkett.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden">
            <Image
              src={hendrikLeneImage}
              alt="Tanzpaar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="container mt-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="rounded-3xl overflow-hidden">
            <Image
              src={ninaImage}
              alt="Tänzerin"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-3xl overflow-hidden">
            <Image
              src={handToHandImage2}
              alt="Tanzpaar Hand-in-Hand"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Donation CTA Section */}
      <section id="spenden" className="container mt-6 scroll-mt-16">
        <div className="bg-base-800/80 rounded-3xl p-8 text-center">
          <h2 className="text-3xl font-bold text-base-50 mb-2">
            Dein Einsatz für unseren Erfolg
          </h2>
          <p className="text-primary-300 text-lg font-semibold mb-6">
            Mach aus Schweiß und Arbeit Glitzer und Glamour. Sei Teil unserer
            Formation – auch ohne Tanzschuhe!
          </p>
          <p className="text-base-200 text-xl font-bold mb-6">
            Jeder Beitrag zählt!
          </p>
          <DonationControls />
        </div>
      </section>

      {/* Donation Info */}
      <section className="container mt-6">
        <div className="not-prose border border-base-700 rounded-3xl text-sm p-4 text-base-400">
          <p>
            Wer eine Spendenbescheinigung möchte, überweist bitte an den Verein.
            Im Überweisungstext bitte unbedingt Name, vollständige Adresse und
            den Zweck (Spende Kleider A-Team Latein) angeben.
          </p>
        </div>
      </section>
    </main>
  );
}
