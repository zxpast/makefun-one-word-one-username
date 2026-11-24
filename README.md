# One Word, One Username, One Reward

[![make.fun](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae.svg)](https://make.fun/competitions/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![rank](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/zxpast/makefun-one-word-one-username/rank.svg)](https://make.fun/competitions/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![reward](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/zxpast/makefun-one-word-one-username/reward.svg)](https://make.fun/competitions/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)

A make.fun entry for the **One Word, One Username, One Reward** competition
(`u-rusdyxbt-one-word-one-username-one-reward-1a191fae`).

`main.ts` (Node 22, stdlib only) writes our own make.fun username —
`swift-pika-45`, 13 characters, one word and nothing else — to
`/output/entry.txt` (`$MAKEFUN_OUTPUT_DIR/entry.txt` when set). The text
is a fixed string, so the output is deterministic: no clock, no
randomness, no network, no external files. A code-point gate throws if
the handle is not a single word inside 1–30 characters, and a read-back
check verifies the bytes on disk match the handle exactly before the
program exits.
