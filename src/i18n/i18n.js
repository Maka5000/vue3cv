import en from "./en.json";
import rus from "./rus.json";
import kz from "./kz.json"

export const defaultLocale = localStorage.getItem("locale") ? localStorage.getItem("locale") : "rus";

export const languages = {
    en,
    rus,
    kz
}