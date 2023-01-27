const express = require("express");
const gameModel = require("../models/game");
const gameRoute = express.Router();

gameRoute.get("/", async (req, res) => {
    let gameUser = await gameModel.find();
    return res.status(200).send({
        message: "Get All Users",
        length: gameUser.length,
        data: gameUser,
    });
});

gameRoute.post("/", async (req, res) => {
    const { name, difficultyLevel } = req.body;
    try {
        let user = new gameModel({ name, difficultyLevel });
        await user.save();
        return res
            .status(200)
            .send({ message: "User Created Successfully", data: user });
    } catch (e) { }
});

gameRoute.patch("/", async (req, res) => {
    const { name, difficultyLevel, id, score } = req.body;
    console.log(' name, difficultyLevel, id :', name, difficultyLevel, id)
    try {
        let user = new gameModel.findByIdAndUpdate({ _id: id }, { name, difficultyLevel, score });
        return res
            .status(200)
            .send({ message: "Next Level", data: user });
    } catch (e) { }
});

gameRoute.get("/randomwords", async (req, res) => {
    const randomArr = [
        "ability",
        "able",
        "about",
        "above",
        "accept",
        "according",
        "account",
        "across",
        "act",
        "bit",
        "black",
        "blood",
        "blue",
        "board",
        "body",
        "book",
        "born",
        "both",
        "box",
        "boy",
        "break",
        "bring",
        "charge",
        "check",
        "child",
        "choice",
        "choose",
        "church",
        "citizen",
        "city",
        "civil",
        "claim",
        "class",
        "clear",
        "clearly",
        "close",
        "decide",
        "decision",
        "deep",
        "defense",
        "degree",
        "Democrat",
        "democratic",
        "describe",
        "design",
        "despite",
        "detail",
        "determine",
        "develop",
        "evidence",
        "exactly",
        "example",
        "executiv",
        "floor",
        "fly",
        "focus",
        "follow",
        "food",
        "foot",
        "interview",
        "into",
        "investment",
        "involve",
        "issue",
        "it",
        "item",
        "its",
        "itself",
        "job",
        "join",
        "kill",
        "kind",
        "kitchen",
        "know",
        "knowledge",
        "lot",
        "love",
        "low",
        "machine",
        "magazine",
        "main",
        "maintain",
        "major",
        "majority",
        "make",
        "nearly",
        "necessary",
        "need",
        "network",
        "number",
        "occur",
        "of",
        "off",
        "offer",
        "office",
        "officer",
        "own",
        "owner",
        "page",
        "pain",
        "painting",
        "paper",
        "parent",
        "part",
        "participant",
        "race",
        "radio",
        "raise",
        "range",
        "rate",
        "subject",
        "success",
        "successful",
        "such",
        "suddenly",
        "suffer",
        "suggest",
        "summer",
        "support",
        "sure",
        "surface",
        "system",
        "table",
        "take",
        "talk",
        "task",
        "tax",
        "teach",
        "teacher",
        "team",
        "technology",
        "television",
        "tell",
        "ten",
        "tend",
        "term",
        "test",
        "than",
        "thank",
        "up",
        "upon",
        "us",
        "use",
        "usually",
        "value",
        "various",
        "very",
        "victim",
        "view",
        "win",
        "wind",
        "window",
        "wish",
        "yeah",
        "year",
        "yes",
        "yet",
        "you",
        "young",
        "your",
        "yourself",
    ];
    let randomWords =
        randomArr[Math.floor(Math.random() * randomArr.length)]
    res.send({ randomWords });
});

module.exports = gameRoute;
