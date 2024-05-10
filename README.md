## Photo gallary

## TODO

- [x] Make it deploy (vercel)
- [x] scaffold a basic UI with mock data
- [x] Tidy up build process
- [x] Actually set-up teh database (vercel postgres)
- [x] Attach the database to UI
- [x] Add Authentication ( w/ clerk)
- [ ] Add image upload
- [ ] "taint" (server-only)
- [ ] use next image component
- [ ] Error Management (w/ Sentry)
- [ ] Routing /image page (parallel route)
- [ ] delete button (w/ Server Actions)
- [ ] Analytics (w/ posthog)
- [ ] Ratelimiting (w/ upstash)


## TO Learn

- [ ] How to manage Images in web in production frontend app and more about images in web.


## Learned

- Added ignoreBuildErrors in next config, because, it peed up the build process by a lot and these rules are added in the github actions, so, we don't need to care about it.
- Always make the database close to your deployment region or you will face an unnecessary lags.
- Database migratoin can show weird behavior becasue they can be out of order in the git history, since they run the code line by line.
- ``export const dynamic = "force-dynamic";``, You can use this make any page behaviour change form static to dynamic. 
- Useful patterns in nextjs, refreshes pages on client side if some action happens on the servers side
``` 
import { useRouter } from "next/navigation";
  const router = useRouter();
  router.refresh()
```
- Hooks are used for updating clien, so thay are always client components...