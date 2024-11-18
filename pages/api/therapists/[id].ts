import { NextApiRequest, NextApiResponse } from "next";
import { therapistsData } from "../../../data/therapistsData";

// APIルート: /api/therapists/[id]
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  // 文字列としてidを比較
  const therapist = therapistsData.find(t => t.id === id);

  if (!therapist) {
    res.status(404).json({ message: "Therapist not found" });
    return;
  }

  res.status(200).json(therapist);
}
