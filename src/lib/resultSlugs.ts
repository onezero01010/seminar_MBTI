import type { TypeCode } from "../types";

export const resultSlugByType: Record<TypeCode, string> = {
  ESTP: "quick-runner",
  ISTP: "quiet-fixer",
  ESFP: "joy-maker",
  ISFP: "cozy-side",
  ENFP: "dream-spark",
  INFP: "heart-letter",
  ENTP: "idea-pop",
  INTP: "curious-mind",
  ESTJ: "steady-manager",
  ISTJ: "always-there",
  ESFJ: "caring-basket",
  ISFJ: "quiet-gardener",
  ENFJ: "cheer-leader",
  INFJ: "deep-listener",
  ENTJ: "path-leader",
  INTJ: "big-picture",
};

export const typeByResultSlug = Object.fromEntries(
  Object.entries(resultSlugByType).map(([type, slug]) => [slug, type]),
) as Record<string, TypeCode>;

export function getResultSlug(typeCode: TypeCode) {
  return resultSlugByType[typeCode];
}

export function getTypeFromResultSlug(slug: string) {
  return typeByResultSlug[slug];
}
