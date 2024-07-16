<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">On-calls form pre-filler</h3>

  <p align="center">
    Do not count your on-call hours manually again
    <br />
    <a href="https://heureka.github.io/on-calls-pre-fill/"><strong>https://heureka.github.io/on-calls-pre-fill/</strong></a>
    <br />
    <br />
  </p>
</div>


<!-- ABOUT THE PROJECT -->
## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](assets/app-screen.png) -->

Once per month developers who has been part of on-call rotation need to count theirs on-call hours manually because reports from opsgenie does not count with country specific holidays. But this tool does. Also it automatically count all on-call hours per team, so each developer does not have to count this by himself.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

This is very easy. Just open https://heureka.github.io/on-calls-pre-fill/

<br />

![Showcase](assets/on-calls-prefiller.gif)

<p align="right">(<a href="#top">back to top</a>)</p>

## New team integration

If your team wants to use this tool, you need to do 3 steps:

1. export your schedule from Opsgenie (in webcal format)
1. import schedule from previous step to your google calendar and make it public
1. add configuration to `window.CONFIG`

Example:
```
      window.CONFIG = {
        TEAMS: {
          ONE_ACCOUNT: {
            TITLE: 'One Account',
            CALENDAR_ID: 'iudsi92n9lj7falv973v2kirn5t7qd6t@import.calendar.google.com',
            COUNTRY: 'CZ',
            WORKING_HOURS_START: 8, // This has to correspond with the working hours set in opsgenie
            WORKING_HOURS_END: 16, // This has to correspond with the working hours set in opsgenie
          },
```

![How to setup calendar](assets/schedule-to-calendar-id.gif)

### Built and Deploy

This is single page app (actually just one `index.html` file) which have all its functionality and configuration bundled in one single file. It leverage power of [Google Calendar API](https://developers.google.com/calendar/api/) to load on-calls rotation calendar exported from Opsgenie.

![JavaScript](https://img.shields.io/static/v1?style=for-the-badge&message=JavaScript&color=222222&logo=JavaScript&logoColor=F7DF1E&label=)
![Opsgenie](https://img.shields.io/static/v1?style=for-the-badge&message=Opsgenie&color=172B4D&logo=Opsgenie&logoColor=FFFFFF&label=)
![Cloudflare Pages](https://img.shields.io/static/v1?style=for-the-badge&message=Cloudflare+Pages&color=F38020&logo=Cloudflare+Pages&logoColor=FFFFFF&label=)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- LOCAL DEVELOPMENT -->
## Local development

You can run this project locally (even if it doesn't make much sense :).

### Prequisities

* Schedule in OpsGenie 📆
* Google account 🧔‍♂️
* Enabled Google Calendar API 🔑
* docker-compose tool 🧰

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/heureka/on-calls-pre-fill.git
1. Enable Google Calendar API:
    - follow instructions on https://support.google.com/googleapi/answer/6158862?hl=en
    - in `Client ID` configuration add `http://127.0.0.1` to _Authorized JavaScript origins_ and to _Authorized redirect URIs_
    - after you create API Key paste it to `API_KEY` in `index.html`
    - find `Google Calendar API` in list and enable it
        > **_NOTE:_** don't forget to setup API restrictions to use only `Google Calendar API`
1. Run app by `docker-compose up`

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [x] Count with holidays
  - [x] Czech
  - [ ] Hungarian
  - [ ] Slovenian
- [x] Add Support for automatic deployment
- [x] Configuration for different working hours start/end
- [x] Enable google form pre-filing

<p align="right">(<a href="#top">back to top</a>)</p>

## FAQ

> **I can't see my on-call hours from previous month, is it bug?**
> 
> It is how it works. You need to be quick and fill your hours before month ends.

> **I can't see override in my calendar, what should i do?**
> 
> Export your schedule from OpsGenie and edit your google calendar again. See that there is different `webcalToken` in your calendar URL. Profit.

> **I want new feature, what should I do?**
> 
> Create new <a href="https://github.com/heureka/on-calls-pre-fill/issues">issue</a>

> **I found bug, what should I do?**
> 
> Create new <a href="https://github.com/heureka/on-calls-pre-fill/issues">issue</a>.


<p align="right">(<a href="#top">back to top</a>)</p>