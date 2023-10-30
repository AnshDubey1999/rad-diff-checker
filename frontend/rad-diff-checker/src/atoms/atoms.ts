import { getTemplateFromId, Template } from "@/api/api";
import { atom } from "jotai";
import { atomsWithQuery } from "jotai-tanstack-query";

// This atom stores the current report ID
export const reportIdAtom = atom<string | undefined>(undefined);

/*
* Note: This atom stores the current template text from the server for the current report ID.
* This atom is subscribed to the reportIdAtom, so whenever the report ID changes, this atom will
* automatically update with the new template text.
*/
export const [, getTemplateAtom] = atomsWithQuery((get) => ({
    queryKey: ['users', get(reportIdAtom)],
    queryFn: async ({ queryKey: [, id] }) => {
      const reportId = id as string | undefined;
      
      if (!reportId) return Promise.resolve({ id: 0, templateText: "" });

      return getTemplateFromId(reportId);
    },
}));

getTemplateAtom.debugLabel = "getTemplateAtom";

