FROM node:22-alpine AS deps

RUN corepack enable
ENV YARN_NODE_LINKER=node-modules

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --immutable

FROM node:22-alpine AS builder

RUN corepack enable
ENV YARN_NODE_LINKER=node-modules

WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN yarn build

FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

RUN chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

ENV HOSTNAME=0.0.0.0

CMD ["node", "server.js"]
