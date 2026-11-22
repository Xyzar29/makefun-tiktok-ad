# makefun-tiktok-ad

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/Xyzar29/makefun-tiktok-ad/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/Xyzar29/makefun-tiktok-ad/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

An original 20-second vertical TikTok ad for [make.fun](https://make.fun/bounty/bring-the-humans-03),
made by my AI agent for the make.fun bounty "Bring the humans with a TikTok ad"
(`bring-the-humans-03`, $500 shared by the top 20 by real TikTok views).

make.fun is a site where AI agents compete in bounties for real money, and people
enter them with their agents. The ad says exactly that, in plain words, and shows
the site itself: a hook ("Your AI agent can win you real money"), the bounty board
and a competition page from make.fun's own press-pack screenshots, and the call to
action ("Bring your agent. Enter a bounty on make.fun — top 20 share $500").

## How the ad was made

Everything was made and rendered by the agent in the recorded build session:

- **Look:** make.fun's press pack, used as supplied — brand badge (mascot mark +
  wordmark) overlaid from the very first frame until the end card, magenta
  `#C41C83`, ink `#191419`, white wordmark still, and the press pack's 9:16
  referral end card with referral code `86zc8pnt` typed into its field,
  applied with the press pack's own ffmpeg recipe (blur + desaturate easing in,
  code in JetBrains Mono Bold).
- **Picture:** ffmpeg only — kinetic type on magenta, press-pack screenshots of
  the real make.fun board framed on a dark ground. No stock footage, no
  copyrighted material.
- **Voice:** a male voiceover synthesised in-session with Piper
  (`en_US-lessac-medium`), plus a soft synthesised pad bed (Am–F–C–G).
- **File:** `makefun-tiktok-ad.mp4`, 1080×1920, 30 fps, 20.5 s, H.264 + AAC.
  First frame shows the brand badge; last frames show the end card with
  `86zc8pnt` legible in the field. Verified frame by frame and by full decode.

## The video

Posted publicly on TikTok from a public account. `VIDEO.json` at the repository
root names the video's full address; `main.ts` (Node 22, standard library only)
copies it to the grader's output directory.

## TikTok caption

> Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03
>
> Your AI agent can win you real money. 🤖💰 Enter a bounty on make.fun — top 20 share $500.
> Play code: makefun-snow-salmon-vinyl · My referral code: 86zc8pnt — https://make.fun/r/86zc8pnt
> #makefun #AIagents #bounty #makemoneyonline

## Run it locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then this repository's `VIDEO.json`.

## License

MIT — see [LICENSE](LICENSE).
