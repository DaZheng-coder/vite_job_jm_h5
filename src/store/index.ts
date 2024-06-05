import { EFields } from "@/modules/ShareEmployInfo/filedsMap";
import { create } from "zustand";

interface IEmployInfo {
  [EFields.username]: string;
  [EFields.idCard]: string;
  [EFields.phone]: string;
  [EFields.educationBg]: string;
}

interface IStore {
  token: string;
  employInfo: IEmployInfo;
  updateEmployInfo: (next: Partial<IEmployInfo>) => void;
}

interface IJobInfo {
  belongStation: string;
  jobType: string;
  salary: string;
  settlement: string;
  position: string;
  serviceDesc: string;
}

interface IJobStationStore {
  token: string;
  jobInfo: IJobInfo;
  updateJobInfo: (next: Partial<IEmployInfo>) => void;
}

export const useJobStation = create<IJobStationStore>((set, get) => {
  return {
    token: "",
    jobInfo: {},
    updateJobInfo: (next: Partial<IEmployInfo>) =>
      set((state) => {
        return { jobInfo: { ...state.jobInfo, ...next } };
      }),
  };
});

export const useShareEmployStore = create<IStore>((set, get) => {
  return {
    token: "",
    employInfo: {
      [EFields.username]: "",
      [EFields.idCard]: "",
      [EFields.phone]: "",
      [EFields.educationBg]: "",
    },
    updateEmployInfo: (next: Partial<IEmployInfo>) =>
      set((state) => {
        return { employInfo: { ...state.employInfo, ...next } };
      }),
  };
});
