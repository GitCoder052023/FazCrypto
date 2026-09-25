---
version: alpha
name: Fireart Studio
description: >-
  A digital product design and development agency that builds elegant, high-performance products for forward-thinking
  startups. The brand combines technical precision with vibrant, energetic visual language—using bold orange accents
  against refined dark and light surfaces to convey both innovation and reliability.
logo:
  src: https://fireart.studio/wp-content/uploads/2025/08/branding.svg
colors:
  surface: '#ffffff'
  surface-dim: '#f5f5f6'
  surface-bright: '#ffffff'
  surface-container-lowest: '#fafafa'
  surface-container-low: '#f5f5f6'
  surface-container: '#ededed'
  surface-container-high: '#e0e0e0'
  surface-container-highest: '#d0d0d0'
  on-surface: '#000000'
  on-surface-variant: '#464554'
  inverse-surface: '#19191a'
  inverse-on-surface: '#ffffff'
  outline: '#76757f'
  outline-variant: '#bfbec9'
  surface-tint: '#ff470a'
  primary: '#ff470a'
  on-primary: '#ffffff'
  primary-container: '#ff561d'
  on-primary-container: '#ffffff'
  inverse-primary: '#ff8c42'
  secondary: '#323234'
  on-secondary: '#ffffff'
  secondary-container: '#464554'
  on-secondary-container: '#ffffff'
  tertiary: '#f78da7'
  on-tertiary: '#000000'
  tertiary-container: '#ffc0d9'
  on-tertiary-container: '#5a1a3a'
  error: '#cf2e2e'
  on-error: '#ffffff'
  error-container: '#f9dedc'
  on-error-container: '#8b0000'
  primary-fixed: '#ff8c42'
  primary-fixed-dim: '#ff6b1a'
  on-primary-fixed: '#ffffff'
  on-primary-fixed-variant: '#ffffff'
  secondary-fixed: '#464554'
  secondary-fixed-dim: '#323234'
  on-secondary-fixed: '#ffffff'
  on-secondary-fixed-variant: '#ffffff'
  tertiary-fixed: '#f78da7'
  tertiary-fixed-dim: '#e6628f'
  on-tertiary-fixed: '#ffffff'
  on-tertiary-fixed-variant: '#ffffff'
  background: '#ffffff'
  on-background: '#000000'
  surface-variant: '#ededed'
typography:
  display:
    fontFamily: PP Radio Grotesk
    fontSize: 54px
    fontWeight: '400'
    lineHeight: 64px
    letterSpacing: '-0.02em'
  headline-lg:
    fontFamily: PP Radio Grotesk
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: '-0.015em'
  headline-md:
    fontFamily: PP Radio Grotesk
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
    letterSpacing: '-0.01em'
  title-lg:
    fontFamily: Graphik
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0em
  body-lg:
    fontFamily: Graphik
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0em
  body-md:
    fontFamily: Graphik
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.375rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 24px
  container-max: 1200px
elevation:
  sm: 0 1px 2px rgba(0, 0, 0, 0.06)
  md: 0 4px 8px rgba(0, 0, 0, 0.08)
  lg: 0 8px 9px rgba(0, 0, 0, 0.06)
layout:
  containerMaxWidth: 1200px
  gridColumns: 12
components:
  button-primary:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    typography: '{typography.label-md}'
    rounded: '{rounded.full}'
    padding: 12px 24px
    height: 48px
    boxShadow: '{elevation.md}'
  button-primary-hover:
    backgroundColor: '{colors.primary-container}'
    textColor: '{colors.on-primary}'
    transition: background-color 200ms ease-in-out
  button-secondary:
    backgroundColor: '{colors.surface-container}'
    textColor: '{colors.on-surface}'
    typography: '{typography.label-md}'
    rounded: '{rounded.full}'
    padding: 12px 24px
    height: 48px
    border: 1px solid {colors.outline-variant}
  button-secondary-hover:
    backgroundColor: '{colors.surface-container-high}'
    transition: background-color 200ms ease-in-out
  button-ghost:
    backgroundColor: transparent
    textColor: '{colors.on-surface}'
    typography: '{typography.label-md}'
    rounded: '{rounded.full}'
    padding: 12px 24px
    height: 48px
  button-ghost-hover:
    backgroundColor: '{colors.surface-container-low}'
    transition: background-color 150ms ease-in-out
  card:
    backgroundColor: '{colors.surface}'
    rounded: '{rounded.lg}'
    padding: '{spacing.md}'
    boxShadow: '{elevation.md}'
    border: 1px solid {colors.surface-container}
  card-hover:
    backgroundColor: '{colors.surface-dim}'
    boxShadow: '{elevation.lg}'
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1)
  input-field:
    backgroundColor: '{colors.surface}'
    textColor: '{colors.on-surface}'
    typography: '{typography.body-md}'
    rounded: '{rounded.DEFAULT}'
    padding: 12px 16px
    border: 1px solid {colors.outline-variant}
    height: 44px
  input-field-focus:
    borderColor: '{colors.primary}'
    boxShadow: 0 0 0 3px rgba(255, 71, 10, 0.1)
    transition: border-color 150ms ease-in-out, box-shadow 150ms ease-in-out
  badge:
    backgroundColor: '{colors.tertiary-container}'
    textColor: '{colors.on-tertiary-container}'
    typography: '{typography.label-sm}'
    rounded: '{rounded.full}'
    padding: 4px 12px
    display: inline-block
  badge-primary:
    backgroundColor: '{colors.primary-container}'
    textColor: '{colors.on-primary-container}'
  list-item:
    backgroundColor: transparent
    rounded: '{rounded.md}'
    padding: '{spacing.sm}'
    transition: background-color 150ms ease-in-out
  list-item-hover:
    backgroundColor: '{colors.surface-container-low}'
    textColor: '{colors.primary}'
  nav-item:
    backgroundColor: '{colors.surface-container}'
    textColor: '{colors.on-surface}'
    typography: '{typography.label-md}'
    rounded: '{rounded.full}'
    padding: 8px 16px
    border: 1px solid {colors.outline-variant}
  nav-item-active:
    backgroundColor: '{colors.primary}'
    textColor: '{colors.on-primary}'
    border: 1px solid {colors.primary}
---

## Overview

Fireart Studio is a digital product design and development agency that transforms complex technical challenges into elegant, high-performance solutions for forward-thinking startups. The brand embodies a philosophy of 'Technical Minimalism with Energetic Accents'—a design movement that pairs refined, spacious layouts with bold, purposeful color moments. The aesthetic is simultaneously professional and approachable: dark-mode hero sections with vibrant pink feature cards contrast against clean white content areas, creating visual rhythm that guides users through a narrative of precision and innovation. The emotional response is one of confidence tempered by accessibility—users feel they're working with experts who understand both the craft and the business.

The brand voice is direct, knowledgeable, and unpretentious. Fireart speaks in active verbs and concrete outcomes: 'We strengthen teams,' 'We build elegant products,' 'We support high-speed requirements.' The vocabulary avoids jargon-heavy abstractions in favor of tangible benefits ('low latency,' 'game dev friendly,' 'concurrent users'). Tone is calm and assured, never breathless or overselling. Example sentence: 'Glitchd is designed to support the high-speed and confidence requirements of the next generation of on-chain games.'

## Colors

The color system is built on a high-contrast foundation: pure white (#ffffff) and near-black (#19191a) provide the structural backbone, while a vibrant orange-red primary (#ff470a) serves as the signature accent for all interactive elements and brand moments. Primary (#ff470a) is deployed exclusively on CTAs ('Contact,' 'Book a call'), hover states, and key brand touchpoints—it commands attention without overwhelming the interface. The secondary palette introduces a sophisticated dark gray (#323234) for secondary actions and surface containers, paired with a soft pink tertiary (#f78da7) used sparingly in feature cards and highlights to add warmth and visual interest. The outline system uses a mid-tone gray (#76757f) for borders and dividers, with a lighter variant (#bfbec9) for subtle sepa

## Typography

The type system employs a three-family strategy: PP Radio Grotesk (400 weight, 54px–28px) anchors all display and headline levels with its distinctive geometric character, communicating modernity and precision. Graphik (400 weight, 18px–16px) handles body copy and descriptive text, offering excellent readability at small sizes with a warm, approachable tone. Inter (500 weight, 14px–12px) is reserved for labels, navigation, and UI microcopy, providing crisp, technical clarity. The hierarchy is built on scale and weight rather than excessive variation: display (54px, -0.02em letter-spacing) commands attention in hero sections; headline-lg (40px) anchors major sections; body-md (16px, 24px line-height) ensures comfortable reading at 1.5x line-height ratio. All headlines use negative letter-sp

## Layout

The page layout operates on a 12-column grid with a max-width of 1200px, centered with symmetric gutters of 24px on desktop. The spacing philosophy is 'generous white space with strategic density': hero sections use lg spacing (40px) for vertical rhythm, creating breathing room between major sections. Content containers employ md spacing (24px) for internal padding, while tighter sm spacing (12px) is used within component groups (button clusters, list items). The grid is fluid on mobile (single column, 16px side margins) and expands to 2–3 columns on tablet before reaching full 12-column layout on desktop. Container max-width of 1200px prevents line lengths from exceeding 80 characters on body text, maintaining readability. Section separators use lg spacing (40px) above and below, creating

## Elevation & Depth

Depth is conveyed through a subtle shadow system rather than dramatic layering. The elevation scale uses three levels: sm (0 1px 2px rgba(0, 0, 0, 0.06)) for resting cards and subtle UI elements, md (0 4px 8px rgba(0, 0, 0, 0.08)) for interactive cards and buttons in their default state, and lg (0 8px 9px rgba(0, 0, 0, 0.06)) for hover states and elevated modals. The shadow values are intentionally soft and diffuse—no sharp, high-contrast shadows—to maintain the refined, technical aesthetic. Cards at rest use md elevation; on hover, they transition to lg elevation with a 250ms cubic-bezier(0.4

## Shapes

The shape philosophy is 'Precision Softness'—a balance between technical sharpness and human approachability. Buttons and primary interactive elements use full-radius (9999px / border-radius: 50%) to signal interactivity and approachability; this is the most recognizable shape in the system. Cards and containers use lg radius (1rem / 16px) for a refined, modern feel that's softer than sharp corners but not overly rounded. Input fields use DEFAULT radius (0.375rem / 6px) for a technical, minimal appearance that feels native to form interfaces. Feature cards in hero sections use md radius (0.75r

## Components

### Action Elements
Buttons are the primary interaction pattern. button-primary uses backgroundColor: {colors.primary} (#ff470a), textColor: {colors.on-primary} (#ffffff), rounded: {rounded.full} (9999px), padding: 12px 24px, height: 48px, and boxShadow: {elevation.md}. On hover, button-primary-hover shifts to backgroundColor: {colors.primary-container} (#ff561d) with a 200ms ease-in-out transition. Secondary buttons (button-secondary) use backgroundColor: {colors.surface-container} (#ededed), a 1px solid border in {colors.outline-variant} (#bfbec9), and the same rounded and height as primary. On hover, they transition to surface-container-high (#e0e0e0). Ghost buttons (button-ghost) have transparent background and on-surface text color, appearing only on hover with a subtle surface-contai

## Do's and Don'ts

**Do**
- Do use primary (#ff470a) exclusively for CTAs, focus states, and brand moments—never for body text or large backgrounds.
- Do maintain 1.5x line-height (24px on 16px base) for body text to ensure readability and visual breathing room.
- Do apply full-radius (9999px) to all interactive buttons and badges to create clear affordance for clickability.
- Do use lg spacing (40px) between major sections to create visual hierarchy and guide users through content.
- Do apply subtle shadows (md elevation: 0 4px 8px rgba(0, 0, 0, 0.08)) to cards at rest, transitioning to lg on hover.
- Do use PP Radio Grotesk for all headlines to reinforce the technical, geometric brand character.
- Do pair dark hero sections (#19191a) with bright feature cards (tertiary pink at 90% opacity) for maximum visual contrast.

**Don't**
- Don't use primary color for secondary actions, body text, or large surface areas—it dilutes its impact and reduces accessibility.
- Don't apply border-radius greater than lg (16px) to cards or containers; it softens the technical precision of the brand.
- Don't use shadows darker than md elevation (0 4px 8px rgba(0, 0, 0, 0.08)) or with blur greater than 8px; it creates visual heaviness.
- Don't mix font families within a single headline or body paragraph; stick to one family per typographic level.
- Don't use letter-spacing greater than 0.02em on headlines or less than 0em on body text; it disrupts readability.
- Don't apply padding less than sm (12px) inside cards or containers; it creates visual cramping.
- Don't use secondary (#323234) or tertiary (#f78da7) for primary CTAs; reserve primary (#ff470a) for all high-priority interactions.