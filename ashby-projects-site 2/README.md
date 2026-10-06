# Ashby Projects

A static site using the supplied Druk Wide and TT Interphases Pro fonts, artwork and photography. No build step or dependencies required. Run a static server in this folder and open index.html.

- index.html: crowd hero, search, featured Sandbox event and Brianna Baxter Asia tour, three previous-event flyer cards plus a full-card See More link, Stamina and Nerve, one mixed club photo carousel, touring, management and enquiries.
- events.html: one evenly spaced grid containing the complete event archive. All flyer frames use the same 4:5 dimensions, including the featured flyer on the homepage. Captions and the See More card align with the same grid. Desktop uses four columns, tablet two, and mobile one.
- event.html?event=EVENT_ID: dedicated event information. Event IDs are sandbox-2026, sandbox-afterparty, overtime, nerve-240kmh-2026, four-to-eight, doruksen, stamina-teletech-2026, datsko-nato, faster-horses, baxter-all-day-long, stamina-teletech-2025 nerve-teletech-2024 and brianna-baxter-asia-tour.
- script.js: event and artist/tour data, live local search, navigation, touring artist profile dialogs, artist enquiries, the swipe/drag carousel, single-photo viewer and scroll reveals.
- styles.css: original typography/layout plus enhancement and revision layers.

The original script.js was not accessible. Existing event information was recovered from uploaded HTML; new artist/touring images and touring copy were supplied by the user. Management bios are still pending. See IMAGE-CHECKLIST.md for remaining imagery.

Sandbox date, venue and ended status were checked against the supplied Eventbrite listing: https://www.eventbrite.com.au/e/sandbox-music-festival-melbourne-tickets-1991427952614
Sandbox lineup was checked against the promoter's Resident Advisor listing: https://ra.co/events/2465116
The supplied official festival flyer is in use, including its support lineup.

Flyer derivatives are actual 1080 × 1350 JPEG canvases with full artwork preserved. The original files remain available. The hero video and other unused assets remain in the assets folder but are no longer displayed. Club Casa has been removed from all pages.

Sandbox afterparty listing: https://www.eventbrite.com.au/e/sandbox-official-after-party-tickets-2001808209241

Overtime listing: https://www.eventbrite.com.au/e/overtime-airwolf-paradise-ferreck-dawn-nl-tickets-1997803518102

Stamina / Teletech afterparty listing: https://www.eventbrite.com.au/e/stamina-111025-teletech-afterparty-ft-special-guests-tba-tickets-1775791583429

Baxter All Day Long listing: https://events.humanitix.com/astraxashby-baxteralldaylong

Nerve / 240KMH official afterparty listing: https://www.eventbrite.com.au/e/nerve-x-240kmh-official-afterparty-part-time-killer-ammara-wilderich-tickets-2001817409760

Stamina / Teletech afterparty (25 April 2026) listing: https://www.eventbrite.com.au/e/stamina-250426-teletech-afterparty-ft-special-guests-tba-tickets-1987806048401

Nerve / Teletech Australia afterparty (13 December 2024) listing: https://www.eventbrite.com.au/e/nerve-teletech-australia-after-party-tickets-1108889491319

The user-supplied Nerve x Teletech link with ID 1291008163169 is for 21 March 2025 and does not match either supplied Teletech flyer. The archive uses matching date-specific listings found on Eventbrite.

Club cards use the existing Stamina and Nerve photography with aligned title, description and action baselines. The Nerve detail hero was removed. Club copy is grouped into a single flowing column beside each logo, with a ticket button for the recurring weekly event.

Stamina weekly tickets: https://www.eventbrite.com.au/e/stamina-melbourne-2026-tickets-1600248278679
Nerve weekly tickets: https://www.eventbrite.com.au/e/nerve-melbourne-2026-tickets-949590128637

The Stamina and Nerve logo SVGs embed the supplied transparent PNG artwork. Nerve's transparent margins are cropped by its SVG viewBox. Stamina is displayed in white with a CSS filter. Both marks have matching visible widths and left alignment, preserving their original proportions.

The one shared Stamina/Nerve carousel supports touch swiping, mouse dragging, arrow buttons, keyboard navigation and a photo viewer. It has a position indicator and respects reduced motion.

Brianna Baxter's supplied Asia tour flyer is included in the event archive and its own event page, with all nine dates transcribed from the flyer. The homepage events section and artist profile link to the tour. No tour year or missing venue was inferred; Delhi and Bengaluru remain TBA.

Touring cards have equal portrait and name panels. Clicking or keyboard-activating a card opens its description and enquiry link; descriptions stay out of the card grid. Niotech uses an initial capital throughout. The header wordmark and announcement text share the same centred axis, with tickets and search adapting to narrow screens.

The touring roster starts with Stan Christ, then VORTEK'S, followed by AREA ØNE, THISO and Niotech. Stan Christ and VORTEK'S use the supplied portraits and bios. The desktop grid keeps three equal columns with matching card sizes across rows. Only the first three artists appear initially; See More Artists reveals the rest, and See Fewer Artists collapses the roster again.

Konnect Festival — Lilly Palmer was added to the event archive with the supplied flyer and Facebook page. Its 12 November 2022 date is confirmed by Ashby's original event archive: https://www.ashbyprojects.com.au/events/event-two-hja4s . The exact venue is not supplied, so the listing uses Naarm / Melbourne.

Doruksen's flyer fills its frame without side borders.

The homepage features Sandbox Music Festival and Brianna Baxter’s Asia tour side by side. Both use flyer frames matching the archive column dimensions; narrower screens stack the featured entries. The tour flyer links to the complete nine-date schedule.

Homepage section links use clean paths such as /about and /stamina; the homepage stays at /. Old hash links are normalized on arrival. _cloudcannon/routing.json serves index.html for the listed section paths so direct visits and refreshes work on CloudCannon.
