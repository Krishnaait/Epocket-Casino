# EPOCKET Social Casino - Project TODO

## Database Schema & Backend
- [x] Design database schema for users, credits, achievements, leaderboard
- [x] Create credit system with 1000 initial credits, 200 daily bonus, 500 reset
- [x] Build achievement tracking system
- [x] Implement leaderboard with points and wins tracking
- [x] Add guest user support with localStorage fallback
- [x] Create tRPC procedures for credit operations
- [x] Create tRPC procedures for achievements
- [x] Create tRPC procedures for leaderboard

## Theme & Global Styles
- [x] Design gold, purple, and dark casino-inspired color palette
- [x] Add casino-themed fonts via Google Fonts
- [x] Create global animations and transitions
- [x] Ensure fully responsive design (laptop, tablet, mobile)

## Homepage
- [x] Create 18+ age gate modal on entry
- [x] Build hero section with "Play Free Social Casino Games"
- [x] Add "No Real Money - Just for Fun" disclaimers
- [x] Create features overview section
- [x] Build game showcase section
- [x] Add "How It Works" section
- [x] Create FAQ section
- [x] Add compliance information section
- [x] Build responsible play section
- [x] Add call-to-action buttons

## Casino Games (Fully Functional)
- [x] Build Texas Hold'em Poker game with full logic
- [x] Build Classic Slots with spin mechanics and animations
- [x] Build Roulette with betting grid and wheel animation
- [x] Build Scratch Cards with reveal animation
- [x] Add sound on/off toggle to all games
- [x] Implement coin win/loss logic for all games
- [x] Add simple animations to all games
- [x] Ensure responsive controls for all devices

## Credit System
- [x] Display virtual coin balance in UI
- [x] Implement 1000 starting credits for new users
- [x] Add daily 200 credits bonus system
- [x] Create reset button for 500 credits when balance is zero
- [x] Track credits in database for registered users
- [x] Track credits in localStorage for guest users

## Achievements & Leaderboard
- [x] Design achievement badge system
- [x] Create achievement unlocking logic
- [x] Build achievements display page
- [x] Create leaderboard with points ranking
- [x] Display wins and points (no monetary value)
- [x] Make leaderboard sortable and filterable

## Informational Pages
- [x] Create Games list page with "Coming Soon" badges
- [x] Build About Us page (story, mission, values, fair play)
- [x] Create How to Play guide for all games
- [x] Build Responsible Gaming page
- [x] Create FAQ page
- [x] Build Contact page

## Legal Pages
- [x] Create Terms & Conditions page
- [x] Build Privacy Policy page
- [x] Create Disclaimer page (no real money, virtual coins only)
- [x] Ensure all legal disclaimers are prominent

## Google Ads Compliance
- [x] Use Google Ads friendly language (Play/Spin/Virtual Coins)
- [x] Remove all gambling terms (bet, wager, real money)
- [x] Add 18+ age restriction throughout
- [x] Display EPOCKET company branding and details
- [x] Ensure all disclaimers are prominent and clear

## Testing & Polish
- [x] Test all games functionality
- [x] Test credit system across all scenarios
- [x] Verify responsive design on laptop, tablet, mobile
- [x] Test guest user flow
- [x] Test registered user flow
- [x] Verify all animations work smoothly
- [x] Check all legal pages are accessible
- [x] Ensure sound toggles work in all games

## Bug Fixes
- [x] Fix nested <p> tag error in homepage
- [x] Fix nested <a> tag error in homepage

## Design Assets
- [x] Generate casino-themed background banner image
- [x] Generate EPOCKET brand logo
- [x] Integrate banner image into homepage
- [x] Integrate logo into header and branding

- [x] Fix nested <a> tag error in poker game page
- [x] Fix nested <a> tag error in Games page
- [x] Add deep detailing to About page
- [x] Add Vision section to About page
- [x] Add deep detailing to How to Play page
- [x] Add Do's and Don'ts section to website
- [x] Add automatic scroll-to-top on page navigation
- [x] Add deep detailing to Responsible Gaming page
- [x] Add deep detailing to FAQ page
- [x] Add deep detailing to Terms & Conditions page
- [x] Add deep detailing to Privacy Policy page
- [x] Add deep detailing to Disclaimer page
- [x] Add Home link to navigation menu in Header
- [x] Add Home link to Quick Links section in Footer
- [x] Change "About" to "About Us" in Header and Footer navigation
- [x] Investigate and fix sound functionality in all games
- [x] Implement actual sound effects for game actions
- [x] Add Free Credit Top-Up button when credits are low or zero
- [x] Implement top-up functionality in Header component
- [x] Show top-up button in all game pages when credits run out
- [x] Fix top-up button error by creating new endpoint for low credits
- [x] Update Header to use new top-up endpoint instead of reset
- [x] Fix undefined revealSquare function error in ScratchGame
- [x] Remove Sign In button from Header component
- [x] Remove authentication checks from all pages and components
- [x] Make all games and features work without login
- [x] Use localStorage for guest user credit tracking
- [x] Increase brand logo size in header for better visibility
- [x] Improve logo contrast and styling
- [x] Fix age gate modal to appear consistently on first visit
- [x] Remove "Please sign in to play" message from all games
- [x] Make all games work without authentication for guest users
- [x] Fix credit mismatch - games showing "Not enough credits" despite Header showing 1000 credits
- [x] Make all games use localStorage credits instead of database credits for guest users
