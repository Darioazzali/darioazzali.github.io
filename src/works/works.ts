

export interface Work {
  title: string,
  subTitle: string | undefined,
  image_url: string,
  logos: Array<string> | undefined,
  link: string | undefined,
  description: string
}
export const my_works: Array<Work> = [

  {
    title: "Interwallet",
    description: "A wallet explorer in the cosmos ecosystem.\
    If you put a valid cosmos address it will show you the assets in the other cosmos blockchain.",
    link: "https://darioazzali.github.io/interwallet/",
    logos: ["react-logo.svg"],
    subTitle: "Wallet explorer",

    image_url: "interwallet.jpg"
  },
  {
    title: "Intonation Studio",
    description: "A wep page for learn how to pronounce the correct world in many languages.\
The users can add tutorials as well as listen.\
Future capability to be added the possibility to record the tutorial and let the back-end compare for leveling up throught a Fourier transform.",
    link: "https://intonationstudio.com/",
    logos: ["react-logo.svg"],
    subTitle: "Pronounce learning",
    image_url: "intonation.jpg"
  },
  {
    title: "Osc controller",
    description: "A project for an art foundation to control the audiovisual thought the Osc protocol.\
An Ui in cli for configure and launch the server as well as web page in order to control the audiovisual\
",
    link: "https://github.com/Darioazzali/oscServer",

    logos: ["react-logo.svg"],
    subTitle: "Osc server, receiver and frontend",
    image_url: "osc.jpg"
  },
  {
    title: "Donatio",
    subTitle: "Donation platform",
    description: "A platform for donate and fundraise for any type of project. Current not working because the smart contract is in a older platform and should be updated.",
    link: "https://darioazzali.github.io/DonatioPage/",
    logos: ["react-logo.svg"],
    image_url: "donatio_real.jpg"
  }

]
