export class Division {

    /**
     * Getter $codigoDivision
     * @return {string}
     */
	public get $codigoDivision(): string {
		return this.codigoDivision;
	}

    /**
     * Getter $descripcion
     * @return {string}
     */
	public get $descripcion(): string {
		return this.descripcion;
	}

    /**
     * Setter $codigoDivision
     * @param {string} value
     */
	public set $codigoDivision(value: string) {
		this.codigoDivision = value;
	}

    /**
     * Setter $descripcion
     * @param {string} value
     */
	public set $descripcion(value: string) {
		this.descripcion = value;
	}
  private codigoDivision: string;
  private descripcion: string;
}
