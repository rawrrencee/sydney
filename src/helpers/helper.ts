import type { ClimbingArea, ClimbingLocationRoute } from '@/models/ClimbingLocation';

export const getRelativeGrade = (grade: string) => {
  if (grade?.toLocaleUpperCase().includes('VB')) return -1;
  let gradeInt = parseInt(grade.substring(1));
  if (isNaN(gradeInt)) return 999;
  return gradeInt;
};

const getGradeMap = (routes: ClimbingLocationRoute[]) => {
  const gradeMap = new Map<string, number>();
  [...routes]
    .filter((r) => r.grade.includes('V'))
    .sort((x, y) => getRelativeGrade(x.grade) - getRelativeGrade(y.grade))
    .forEach((r) => {
      if (!gradeMap.has(r.grade)) {
        gradeMap.set(r.grade, 1);
      } else {
        gradeMap.set(r.grade, gradeMap.get(r.grade)! + 1);
      }
    });

  return gradeMap;
};

export const unqiueAreaGradeCounts = (routes: ClimbingLocationRoute[]) => {
  const gradeMap = getGradeMap(routes);
  return Array.from(gradeMap.keys()).map((k) => ({
    grade: k,
    gradeInt: getRelativeGrade(k),
    count: gradeMap.get(k) ?? 0
  }));
};

export const unqiueLocationGradeCounts = (areas: ClimbingArea[]) => {
  const gradeMap = new Map<string, number>();
  let routes: ClimbingLocationRoute[] = [];
  areas.forEach((a) => {
    routes = [...routes, ...a.routes];
  });
  [...routes]
    .filter((r) => r.grade.includes('V'))
    .sort((x, y) => getRelativeGrade(x.grade) - getRelativeGrade(y.grade))
    .forEach((r) => {
      if (!gradeMap.has(r.grade)) {
        gradeMap.set(r.grade, 1);
      } else {
        gradeMap.set(r.grade, gradeMap.get(r.grade)! + 1);
      }
    });
  return Array.from(gradeMap.keys()).map((k) => ({
    grade: k,
    gradeInt: getRelativeGrade(k),
    count: gradeMap.get(k) ?? 0
  }));
};
