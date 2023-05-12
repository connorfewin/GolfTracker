/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse($filter: ModelSubscriptionCourseFilterInput) {
    onCreateCourse(filter: $filter) {
      id
      name
      holeIds
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse($filter: ModelSubscriptionCourseFilterInput) {
    onUpdateCourse(filter: $filter) {
      id
      name
      holeIds
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse($filter: ModelSubscriptionCourseFilterInput) {
    onDeleteCourse(filter: $filter) {
      id
      name
      holeIds
      createdAt
      updatedAt
    }
  }
`;
export const onCreateHole = /* GraphQL */ `
  subscription OnCreateHole($filter: ModelSubscriptionHoleFilterInput) {
    onCreateHole(filter: $filter) {
      id
      number
      par
      handicap
      yardage
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateHole = /* GraphQL */ `
  subscription OnUpdateHole($filter: ModelSubscriptionHoleFilterInput) {
    onUpdateHole(filter: $filter) {
      id
      number
      par
      handicap
      yardage
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteHole = /* GraphQL */ `
  subscription OnDeleteHole($filter: ModelSubscriptionHoleFilterInput) {
    onDeleteHole(filter: $filter) {
      id
      number
      par
      handicap
      yardage
      createdAt
      updatedAt
    }
  }
`;
export const onCreateRound = /* GraphQL */ `
  subscription OnCreateRound($filter: ModelSubscriptionRoundFilterInput) {
    onCreateRound(filter: $filter) {
      id
      date
      courseID
      statsIds
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRound = /* GraphQL */ `
  subscription OnUpdateRound($filter: ModelSubscriptionRoundFilterInput) {
    onUpdateRound(filter: $filter) {
      id
      date
      courseID
      statsIds
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRound = /* GraphQL */ `
  subscription OnDeleteRound($filter: ModelSubscriptionRoundFilterInput) {
    onDeleteRound(filter: $filter) {
      id
      date
      courseID
      statsIds
      createdAt
      updatedAt
    }
  }
`;
export const onCreateStats = /* GraphQL */ `
  subscription OnCreateStats($filter: ModelSubscriptionStatsFilterInput) {
    onCreateStats(filter: $filter) {
      id
      holeID
      score
      putts
      playableSecond
      greensInReg
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStats = /* GraphQL */ `
  subscription OnUpdateStats($filter: ModelSubscriptionStatsFilterInput) {
    onUpdateStats(filter: $filter) {
      id
      holeID
      score
      putts
      playableSecond
      greensInReg
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStats = /* GraphQL */ `
  subscription OnDeleteStats($filter: ModelSubscriptionStatsFilterInput) {
    onDeleteStats(filter: $filter) {
      id
      holeID
      score
      putts
      playableSecond
      greensInReg
      createdAt
      updatedAt
    }
  }
`;
