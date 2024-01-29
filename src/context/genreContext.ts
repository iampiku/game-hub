import { createContext } from "react";

import type { Genre } from "../types";

export const GenreContext = createContext<Genre | null>(null);
