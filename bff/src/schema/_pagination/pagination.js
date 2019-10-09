/**
 * Pagination class.
 */
class Pagination {
  /**
   * Get connection.
   */
  static getConnection(nodes) {
    const edges = this.getEdges(nodes);
    const pageInfo = this.getPageInfo(edges);
    return { pageInfo, edges };
  }

  /**
   * Get edges.
   */
  static getEdges(nodes) {
    return nodes.map(node => this.getEdge(node));
  }

  /**
   * Get edge.
   */
  static getEdge(node) {
    const cursor = this.getCursor(node);
    return { cursor, node };
  }

  /**
   * Get cursor.
   */
  static getCursor(node) {
    return `cursor:${node.id}`;  // tekito-
  }

  /**
   * Get page info.
   */
  static getPageInfo(edges) {
    const startCursor = this.getCursor(edges[0].node);
    const endCursor = this.getCursor(edges[edges.length-1].node);
    const hasPreviousPage = false;  // tekito-. Need db info in real case.
    const hasNextPage = false;  // tekito-. Need db info in real case.
    return {
      startCursor,
      endCursor,
      hasPreviousPage,
      hasNextPage,
    };
  }
}

module.exports = Pagination;
