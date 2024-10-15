import { sql, relations } from 'drizzle-orm';
import { int, sqliteTable, text, index } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
    id: text('id', { length: 256 }).primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  gains: int('gains').notNull().default(0),
  cash: int('cash').notNull().default(0),
  referralCode: text('referral_code').notNull().default(''),
  referralCodeUsed: int('referral_code_used', { mode: 'boolean' }).default(false),
  createdAt: int('created_at', { mode: 'timestamp' })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: int('updated_at', { mode: 'timestamp' }).$onUpdate(() => new Date()),
  isAdmin: int('is_admin', { mode: 'boolean' }).default(false),
  isDeleted: int('is_deleted', { mode: 'boolean' }).default(false),
  activated: int('activated', { mode: 'boolean' }).default(false),
}, (table) => ({
  emailIndex: index('email_idx').on(table.email),
  referralCodeIndex: index('referral_code_idx').on(table.referralCode),
}));

export const tasks = sqliteTable('tasks', {
    id: int('id', { mode: 'number' }).primaryKey({ autoIncrement: true }).notNull(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  howTo: text('how_to').notNull(),
  gains: int('gains').notNull(),
  duration: int('duration').notNull(),
  category: text('category').notNull(),
  level: int('level').notNull(),
  limit: int('limit').notNull(),
  submissionType: text('submission_type', { enum: ['text', 'image', 'video'] }).notNull(),
  completed: int('completed').notNull().default(0),
  createdAt: int('created_at', { mode: 'timestamp' })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: int('updated_at', { mode: 'timestamp' }).$onUpdate(() => new Date()),
});

export const games = sqliteTable('games', {
  id: int('id', { mode: 'number' }).primaryKey({ autoIncrement: true }).notNull(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  howTo: text('how_to').notNull(),
  gains: int('gains').notNull(),
  type: text('type').notNull(),
  level: int('level').notNull(),
  image: text('image').notNull(),
  createdAt: int('created_at', { mode: 'timestamp' })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: int('updated_at', { mode: 'timestamp' }).$onUpdate(() => new Date()),
});

export const gameCompletions = sqliteTable('game_completions', {
  id: int('id', { mode: 'number' }).primaryKey({ autoIncrement: true }).notNull(),
  userId: text('user_id').references(() => users.id).notNull(),
  gameId: int('game_id').references(() => games.id).notNull(),
  gainsAwarded: int('gains_awarded').notNull(),
  completedAt: int('completed_at', { mode: 'timestamp' })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const taskCompletions = sqliteTable('task_completions', {
    id: int('id', { mode: 'number' }).primaryKey({ autoIncrement: true }).notNull(),
  userId: text('user_id').references(() => users.id, ).notNull(),
  taskId: int('task_id').references(() => tasks.id).notNull(),
  verifierId: int('verifier_id').references(() => users.id),
  status: text('status', { enum: ['pending', 'completed'] }).notNull(),
  submissionDate: int('submission_date', { mode: 'timestamp' })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  submissionData: text('submission_data').notNull(),
  gainsAwarded: int('gains_awarded').notNull().default(0),
});

export const transactions = sqliteTable('transactions', {
    id: int('id', { mode: 'number' }).primaryKey({ autoIncrement: true }).notNull(),
  type: text('type', { enum: ['gains_to_cash', 'gains_earned', 'cash_deposit', 'cash_withdrawal', 'cash_to_gains'] }).notNull(),
  amount: int('amount').notNull(),
  description: text('description').notNull(),
  userId: text('user_id').references(() => users.id).notNull(),
  createdAt: int('created_at', { mode: 'timestamp' })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: int('updated_at', { mode: 'timestamp' }).$onUpdate(() => new Date()),
});

export const raffles = sqliteTable('raffles', {
  id: int('id', { mode: 'number' }).primaryKey({ autoIncrement: true }).notNull(),
  name: text('name').notNull(),
  description: text('description').notNull(),
  entryGains: int('entry_gains').notNull(),
  endDate: int('end_date', { mode: 'timestamp' }).notNull(),
  numberOfEntries: int('number_of_entries').notNull().default(0),
  limit: int('limit').notNull(),
  winnerId: text('winner_id').references(() => users.id),
  image: text('image').notNull(),
  createdAt: int('created_at', { mode: 'timestamp' })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updateAt: int('updated_at', { mode: 'timestamp' }).$onUpdate(() => new Date()),
});

export const raffleEntries = sqliteTable('raffle_entries', {
  id: int('id', { mode: 'number' }).primaryKey({ autoIncrement: true }).notNull(),
  userId: text('user_id').references(() => users.id).notNull(),
  raffleId: int('raffle_id').references(() => raffles.id).notNull(),
  createdAt: int('created_at', { mode: 'timestamp' })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const activities = sqliteTable('activities', {
  id: int('id', { mode: 'number' }).primaryKey({ autoIncrement: true }).notNull(),
  userId: text('user_id').references(() => users.id).notNull(),
  type: text('type', { enum: ['user', 'task', 'game', 'raffle', 'invest', 'transaction'] }).notNull(),
  action: text('action').notNull(),
  details: text('details'),
  createdAt: int('created_at', { mode: 'timestamp' })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const userRelations = relations(users, ({ many }) => ({
  completedTasks: many(taskCompletions, { relationName: 'userCompletedTasks' }),
  verifiedTasks: many(taskCompletions, { relationName: 'userVerifiedTasks' }),
  transactions: many(transactions, { relationName: 'userTransactions' }),
  raffleEntries: many(raffleEntries, { relationName: 'userRaffleEntries' }),
  wonRaffles: many(raffles, { relationName: 'userWonRaffles' }),
  completedGames: many(gameCompletions, { relationName: 'userCompletedGames' }),
  activities: many(activities, { relationName: 'userActivities' }),
}));

export const taskRelations = relations(tasks, ({ many }) => ({
  taskCompletions: many(taskCompletions, { relationName: 'taskCompletions' }),
}));

export const gameRelations = relations(games, ({ many }) => ({
  gameCompletions: many(gameCompletions, { relationName: 'gameCompletions' }),
}));

export const taskCompletionRelations = relations(taskCompletions, ({ one }) => ({
  user: one(users, {
    fields: [taskCompletions.userId],
    references: [users.id],
    relationName: 'userCompletedTasks',
  }),
  task: one(tasks, {
    fields: [taskCompletions.taskId],
    references: [tasks.id],
    relationName: 'taskCompletions',
  }),
  verifier: one(users, {
    fields: [taskCompletions.verifierId],
    references: [users.id],
    relationName: 'userVerifiedTasks',
  }),
}));

export const gameCompletionRelations = relations(gameCompletions, ({ one }) => ({
  user: one(users, {
    fields: [gameCompletions.userId],
    references: [users.id],
    relationName: 'userCompletedGames',
  }),
  game: one(games, {
    fields: [gameCompletions.gameId],
    references: [games.id],
    relationName: 'gameCompletions',
  }),
}));

export const transactionRelations = relations(transactions, ({ one }) => ({
  user: one(users, {
    fields: [transactions.userId],
    references: [users.id],
    relationName: 'userTransactions',
  }),
}));

export const raffleRelations = relations(raffles, ({ one, many }) => ({
  winner: one(users, {
    fields: [raffles.winnerId],
    references: [users.id],
    relationName: 'userWonRaffles',
  }),
  entries: many(raffleEntries, { relationName: 'raffleEntries' }),
}));

export const raffleEntryRelations = relations(raffleEntries, ({ one }) => ({
  user: one(users, {
    fields: [raffleEntries.userId],
    references: [users.id],
    relationName: 'userRaffleEntries',
  }),
  raffle: one(raffles, {
    fields: [raffleEntries.raffleId],
    references: [raffles.id],
    relationName: 'raffleEntries',
  }),
}));

export const activityRelations = relations(activities, ({ one }) => ({
  user: one(users, {
    fields: [activities.userId],
    references: [users.id],
    relationName: 'userActivities',
  }),
}));