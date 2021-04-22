import { Notificacao } from "./notificacao";
import { Podcast } from "./podcast";

export interface Favoritos {
    podcast: Podcast;
    notificacao: Notificacao[];
}